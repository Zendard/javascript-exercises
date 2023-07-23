const add = function (firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function (inputArray) {
	let sum = 0;
	for (i = 0; i < inputArray.length; i++) {
		sum += inputArray[i];
	}
	return sum;
};

const multiply = function () {
	let product = 1;
	for (i = 0; i < arguments.length; i++) {
		product *= arguments[i];
	}
	return product;
};

const power = function (number, exponent) {
	return number ** exponent;
};

const factorial = function (number) {
	let factorial = 1;
	for (i = 1; i <= number; i++) {
		factorial *= i;
	}
	return factorial;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
