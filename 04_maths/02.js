const num = [46, 85, 46, 24, 23, 11, 21];

//! Math.max() Used to returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.

console.log(Math.max(...num)); // 85
console.log(Math.max(12, 3, 4, 56, 78, 54, 56)); // 78

// ----------------------------------------

// ! Math.min() Used to returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.

console.log(Math.min(...num)); // 11
console.log(Math.min(12, 3, 4, 56, 78, 54, 56)); // 3

// -------------------------------------

// ! Math.pow() static method returns the value of a base raised to a power. That is Math.pow(x,y) = x^y..................
const number = 45;
const p = 3;

console.log(Math.pow(number, p)); // 91125

console.log(Math.pow(2, 2)); // 4

// -----------------------------------------

//! Math.sqrt() static method returns the square root of a number.................

const squareNum = 25;

console.log(Math.sqrt(squareNum)); // 5

console.log(Math.sqrt(49)); // 7
 