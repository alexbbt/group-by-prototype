/* eslint-disable */

require("../src/index.js");
const chai = require("chai");

const expect = chai.expect;
const assert = chai.assert;

const keyed = [
	{
		"key": "word",
		"value": "hello"
	}, {
		"key": "word",
		"value": "world"
	}, {
		"key": "number",
		"value": 2
	}
];

const sorted = {
	value: [1,2,3,4,5,6,7,8,9,0],
	evenIndex: [1,3,5,7,9],
	oddIndex: [2,4,6,8,0]
};
const unsorted = {
	value: [4,9,5,8,1,6,3,0,2,7],
	evenIndex: [4,5,1,3,2],
	oddIndex: [9,8,6,0,7]
};

describe("Group By String", function() {
	let keyedResults = keyed.groupBy("key");
	it("Length for `key` word", function() {
		expect(keyedResults["word"].length).to.equal(2, "there are two values with `key` word");
	});
	it("Length for `key` number", function() {
		expect(keyedResults["number"].length).to.equal(1, "there is one value with `key` number");
	});
});

describe("Group By Function By Value When Sorted", function() {
	let evenOddSorted = sorted.value.groupBy(function(current) {
		return current % 2 === 0 ? "even" : "odd";
	});
	let evenOddSortedByValue = sorted.value.groupBy(function(current) {
		return current % 2;
	});
	it("`even` values are even", function() {
		evenOddSorted["even"].forEach(function(element) {
			expect(element % 2).to.equal(0, "value % 2 === 0");
		});
	});
	it("`odd` values are odd", function() {
		evenOddSorted["odd"].forEach(function(element) {
			expect(element % 2).to.equal(1, "value % 2 === 1");
		});
	});
	it("`0` values are even", function() {
		evenOddSortedByValue[0].forEach(function(element) {
			expect(element % 2).to.equal(0, "value % 2 === 0");
		});
	});
	it("`1` values are odd", function() {
		evenOddSortedByValue[1].forEach(function(element) {
			expect(element % 2).to.equal(1, "value % 2 === 1");
		});
	});
});

describe("Group By Function By Value When Unsorted", function() {
	let evenOddUnSorted = unsorted.value.groupBy(function(current) {
		return current % 2 === 0 ? "even" : "odd";
	});
	let evenOddUnSortedByValue = unsorted.value.groupBy(function(current) {
		return current % 2;
	});
	it("`even` values are even", function() {
		evenOddUnSorted["even"].forEach(function(element) {
			expect(element % 2).to.equal(0, "value % 2 === 0");
		});
	});
	it("`odd` values are odd", function() {
		evenOddUnSorted["odd"].forEach(function(element) {
			expect(element % 2).to.equal(1, "value % 2 === 1");
		});
	});
	it("`0` values are even", function() {
		evenOddUnSortedByValue[0].forEach(function(element) {
			expect(element % 2).to.equal(0, "value % 2 === 0");
		});
	});
	it("`1` values are odd", function() {
		evenOddUnSortedByValue[1].forEach(function(element) {
			expect(element % 2).to.equal(1, "value % 2 === 1");
		});
	});
});

describe("Group By Function By Index When Sorted", function() {
	let evenOddSorted = sorted.value.groupBy(function(_, index) {
		return index % 2 === 0 ? "even" : "odd";
	});
	let evenOddSortedByValue = sorted.value.groupBy(function(_, index) {
		return index % 2;
	});
	it("`even` values are even", function() {
		expect(JSON.stringify(evenOddSorted["even"])).to.equal(JSON.stringify(sorted.evenIndex), "value % 2 === 0");
	});
	it("`odd` values are odd", function() {
		expect(JSON.stringify(evenOddSorted["odd"])).to.equal(JSON.stringify(sorted.oddIndex), "value % 2 === 1");
	});
	it("`0` values are even", function() {
		expect(JSON.stringify(evenOddSortedByValue[0])).to.equal(JSON.stringify(sorted.evenIndex), "value % 2 === 0");
	});
	it("`1` values are odd", function() {
		expect(JSON.stringify(evenOddSortedByValue[1])).to.equal(JSON.stringify(sorted.oddIndex), "value % 2 === 1");
	});
});

describe("Group By Function By Index When Unsorted", function() {
	let evenOddUnSorted = unsorted.value.groupBy(function(_, index) {
		return index % 2 === 0 ? "even" : "odd";
	});
	let evenOddUnSortedByValue = unsorted.value.groupBy(function(_, index) {
		return index % 2;
	});
	it("`even` values are even", function() {
		expect(JSON.stringify(evenOddUnSorted["even"])).to.equal(JSON.stringify(unsorted.evenIndex), "value % 2 === 0");
	});
	it("`odd` values are odd", function() {
		expect(JSON.stringify(evenOddUnSorted["odd"])).to.equal(JSON.stringify(unsorted.oddIndex), "value % 2 === 1");
	});
	it("`0` values are even", function() {
		expect(JSON.stringify(evenOddUnSortedByValue[0])).to.equal(JSON.stringify(unsorted.evenIndex), "value % 2 === 0");
	});
	it("`1` values are odd", function() {
		expect(JSON.stringify(evenOddUnSortedByValue[1])).to.equal(JSON.stringify(unsorted.oddIndex), "value % 2 === 1");
	});
});
