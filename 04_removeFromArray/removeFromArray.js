const removeFromArray = function (array) {
	for (i = 1; i < arguments.length; i++) {
		array.forEach((element) => {
			if (element === arguments[i]) {
				array.splice(array.indexOf(element), 1);
			}
		});
	}
	return array;
};
// Do not edit below this line
module.exports = removeFromArray;
