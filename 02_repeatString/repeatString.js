const repeatString = function (string, num) {
	let returnString = "";
	if (num >= 0) {
		for (i = 0; i < num; i++) {
			returnString += string;
		}
	} else {
		returnString = "ERROR";
	}
	return returnString;
};

// Do not edit below this line
module.exports = repeatString;
