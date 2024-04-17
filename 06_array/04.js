//! spread operator - (...) ------also used to concate
const myHero = ["Bheem", "Doremon", "Nobita"];
const myHero2 = ["Shinchan", "Krishna"];

const allHeroes = [...myHero, ...myHero2];
console.log(allHeroes); //* [ 'Bheem', 'Doremon', 'Nobita', 'Shinchan', 'Krishna' ]

// -------------------------------------------

//! flat()--- This method is commonly used to transform multi-dimensional arrays into one-dimensional arrays.

const arr = [
  1,
  5,
  1,
  6,
  [45, 6, 7, ["Roshan", "Rawat"], [1, 5, 34, 6]],
  ["rrr", 544],
];
console.log(arr);
/*
  [
    1,
    5,
    1,
    6,
    [ 45, 6, 7, [ 'Roshan', 'Rawat' ], [ 1, 5, 34, 6 ] ],
    [ 'rrr', 544 ]
  ]
  */

console.log(arr.flat(Infinity));
/*
[
  1, 5,        1,
  6, 45,       6,
  7, 'Roshan', 'Rawat',
  1, 5,        34,
  6, 'rrr',    544
]

*/
// -------------------------------------------

//! Array.isArray() method is used to determine whether a given value is an array.
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray("[]"));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false

const arr1 = [1, 2, 3];
const obj = { key: "value" };
const str = "Hello, World!";

console.log(Array.isArray(arr1)); // true
console.log(Array.isArray(obj)); // false
console.log(Array.isArray(str)); // false
// -------------------------------------------

//! Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.from("Roshan")); //* [ 'R', 'o', 's', 'h', 'a', 'n' ]

console.log(Array.from([1, 2, 5, "Roshan"])); //* [ 1, 2, 5, 'Roshan' ]
// -------------------------------------------

//! Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
/**
Array.of()
Array.of(element1)
Array.of(element1, element2)
Array.of(element1, element2,  …,  elementN)

*/

const length = 5;
const emptyArray = Array.of(length);
console.log(emptyArray); // Output: [ <5 empty items> ]

// -------------

const elements = Array.of(1, 2, 3, 4, 5);
console.log(elements); // Output: [1, 2, 3, 4, 5]

// -------------------------------------------

//!

// -------------------------------------------

//!
