const GAMBITS = Object.freeze({
	ROCK: "rock",
	SCISSOR: "scissor",
	PAPER: "paper"
});
const GAMBIT_VALUES = Object.values(GAMBITS);
function isValidGambit(gambit) {
	return GAMBIT_VALUES.includes(gambit);
}
function printGambits() {
	return GAMBIT_VALUES.join(", ");
}
module.exports = {
	GAMBITS,
	GAMBIT_VALUES,
	isValid: isValidGambit,
	print: printGambits
};