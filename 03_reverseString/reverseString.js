const reverseString = function (string) {
	let returnString = "";
	const stringLength = string.length;
	for (i = stringLength - 1; i >= 0; i--) {
		returnString += string[i];
	}
	return returnString;
};

// Do not edit below this line
module.exports = reverseString;
