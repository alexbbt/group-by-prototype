"use strict";

const groupBy = function() {
	var key = arguments[0];
	var keyed = typeof key !== "function";
	return this.reduce((partial, current, index) => {
		var currentKey = keyed ? current[key] : key(current, index);
		if (!partial.hasOwnProperty(currentKey)) {
			partial[currentKey] = [];
		}
		partial[currentKey].push(current);
		return partial;
	}, {});
};

Array.prototype.groupBy = groupBy;
