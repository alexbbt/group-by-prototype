# group-by-prototype

[![NPM](https://nodei.co/npm/group-by-prototype.png?compact=true)](https://nodei.co/npm/group-by-prototype/)

Group an Array of objects by key or with a function.

## Installation

``` bash
npm install --save group-by-prototype
```

## Usage

example reading last 50 lines of a file
``` javascript
require('group-by-prototype');
const data = [
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
let groupedByKey = data.groupBy("key");

let groupedEvenOdd = [4,9,5,8,1,6,3,0,2,7].groupBy((x, i) => { return x % 2 === 0 ? "even" : "odd"});
/*
  {
    "even": [4,8,6,0,2],
    "odd": [9,5,1,3,7]
  }
*/
let groupedIndexEvenOdd = [8,6,4,2,0,1,3,5,7,9].groupBy((x, i) => { return i % 2 === 0 ? "even" : "odd"});
/*
  {
    "even": [4,5,1,3,2],
    "odd": [9,8,6,0,7]
  }
*/
```

## Contributing

1. Fork it on Github [https://github.com/alexbbt/group-by-prototype](https://github.com/alexbbt/read-last-lines)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
