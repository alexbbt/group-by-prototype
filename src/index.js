"use strict";

const groupBy = function(key) {
	if (null == key) {
		// return original array if no key is given.
		return this;
	}
	// is this a key or a key function?
	let iskey = typeof key !== "function";
	return this.reduce((partial, current, index) => {
		let currentKey = iskey ? current[key] : key(current, index);
		if (!partial.hasOwnProperty(currentKey)) {
			partial[currentKey] = [];
		}
		partial[currentKey].push(current);
		return partial;
	}, {});
};

Array.prototype.groupBy = groupBy;
