//! Math.abs()- Used to get the absolute (positive) value of a number. But positive number will always positive................

const num = -93930; //* negative no.
console.log(Math.abs(num)); //* positive number

// ---------------------------------

const num1 = 82.254;

//! Math.ceil()- Used to always rounds up and returns the smallest integer greater than or equal to a given number. ciel = ceiling(top)..................
console.log(Math.ceil(num1)); // 83

// ----------------------------------

//! Math.floor() - Used to always rounds down and returns the largest integer less than or equal to a given number. floor = bottom(down).....................
console.log(Math.floor(num1)); //82

// ---------------------------------

//! Math.round() - Used to returns the value of a number rounded to the nearest integer.

const n = 57.24;

const n1 = 57.64;

console.log(Math.round(n)); // 57

console.log(Math.round(n1)); // 58
