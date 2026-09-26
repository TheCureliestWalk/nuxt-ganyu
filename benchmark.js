const { performance } = require('perf_hooks');

const size = 9;
const historyArray = Array(size)
  .fill(null)
  .map((_, i) => i);
let board = Array(size).fill(null);

const iterations = 10000000;

let startMap = performance.now();
for (let i = 0; i < iterations; i++) {
  historyArray.map((value, index) => (board[index] = value));
}
let endMap = performance.now();
let mapTime = endMap - startMap;

let startForEach = performance.now();
for (let i = 0; i < iterations; i++) {
  historyArray.forEach((value, index) => (board[index] = value));
}
let endForEach = performance.now();
let forEachTime = endForEach - startForEach;

console.log(`Map: ${mapTime.toFixed(2)}ms`);
console.log(`ForEach: ${forEachTime.toFixed(2)}ms`);
console.log(
  `Improvement: ${(((mapTime - forEachTime) / mapTime) * 100).toFixed(2)}%`
);
