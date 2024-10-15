const { GAMBITS, GAMBIT_VALUES } = require("./gambits");

const GAME_RESULTS = Object.freeze({
	WON: "WON",
	LOSE: "LOSE",
	DRAW: "DRAW"
});

// [player][ai]
const RESULT_MATRIX = Object.freeze({
	[GAMBITS.ROCK]: {
		[GAMBITS.ROCK]: GAME_RESULTS.DRAW,
		[GAMBITS.PAPER]: GAME_RESULTS.LOSE,
		[GAMBITS.SCISSOR]: GAME_RESULTS.WON,
	},
	[GAMBITS.SCISSOR]: {
		[GAMBITS.ROCK]: GAME_RESULTS.LOSE,
		[GAMBITS.PAPER]: GAME_RESULTS.WON,
		[GAMBITS.SCISSOR]: GAME_RESULTS.DRAW,
	},
	[GAMBITS.PAPER]: {
		[GAMBITS.ROCK]: GAME_RESULTS.WON,
		[GAMBITS.PAPER]: GAME_RESULTS.DRAW,
		[GAMBITS.SCISSOR]: GAME_RESULTS.LOSE
	}
});

function getAIGambit() {
	const index = Math.floor(Math.random() * GAMBIT_VALUES.length);
	return GAMBIT_VALUES[index];
}
function rockScissorPaperPlay(gambitPlayer) {
	const aiGambit = getAIGambit();	
	return {
		result: RESULT_MATRIX[gambitPlayer][aiGambit],
		gambit: aiGambit
	};
}

module.exports = {
	GAME_RESULTS,
	rockScissorPaperPlay
};