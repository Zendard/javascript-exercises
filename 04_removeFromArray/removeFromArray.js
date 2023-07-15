const removeFromArray = function (array) {
	for (i = 1; i < arguments.length - 1; i++) {
		const index = array.indexOf(arguments[i]);
		array.splice(index, 1);
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
