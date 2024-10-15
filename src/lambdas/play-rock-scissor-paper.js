'use strict';

const apiUtils = require("../utils/api");
const gambits = require("../domain/gambits");
const { rockScissorPaperPlay, GAME_RESULTS } = require("../domain/rock-scissor-paper");

const GAME_RESULT_MESSAGES = {
  [GAME_RESULTS.WON]: "You won 🤯",
  [GAME_RESULTS.LOSE]: "You lost 🥱",
  [GAME_RESULTS.DRAW]: "It's a draw 😵"
};

const INVALID_GAMBIT_RESPONSE = (gambitList) => ({
  code: "INVALID_GAMBIT",
  message: `Invalid gambit. Please choose one of the following: ${gambitList}`
});

exports.handler = async (event) => {
  try {
    const { gambitPlayer } = event.pathParameters || {};

    if (!gambitPlayer || !gambits.isValid(gambitPlayer)) {
      return apiUtils.send(INVALID_GAMBIT_RESPONSE(gambits.print()), 400);
    }

    const gameResult = rockScissorPaperPlay(gambitPlayer);
    const { result, gambit: gambitAI } = gameResult;

    return apiUtils.send({
      code: result,
      message: GAME_RESULT_MESSAGES[result],
      data: { gambitAI }
    });

  } catch (error) {
    console.error('Error processing the request:', error);
    return apiUtils.send({
      code: "INTERNAL_SERVER_ERROR",
      message: "An error occurred while processing your request. Please try again later."
    }, 500);
  }
};
