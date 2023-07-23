const palindromes = function () {
	let trueCount = 0;
	let wordCount = 0;
	for (i = 0; i < arguments.length; i++) {
		let word = arguments[i];
		word = word.replace(/!/g, "");
		word = word.replace(/\./g, "");
		word = word.replace(/,/g, "");
		word = word.replace(/ /g, "");
		word = word.toLowerCase();
		let reverseWord = "";
		for (letter = word.length - 1; letter >= 0; letter--) {
			reverseWord += word[letter];
		}
		if (word == reverseWord) {
			trueCount++;
		}
		wordCount++;
	}
	if (trueCount >= wordCount) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
