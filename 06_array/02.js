const myArray = [1, 5, 3, 4, 6, 7];

const myArray2 = [4, "hello", true, 45.25];

const myArray3 = new Array(45, "Roshan", 65, 25);

//! join(): Converts array elements to a string with a specified separator.
console.log(myArray); //* [ 1, 5, 3, 4, 6, 7 ]

console.log(myArray.join()); //* 1,5,3,4,6,7

console.log(myArray.join(" ")); //* 1 5 3 4 6 7

console.log(myArray.join("-")); //* 1-5-3-4-6-7

// -------------------------------------------

//! slice(): Creates a new array by extracting a portion of an existing array. without changing original array----------------
/*
 * slice()
 * slice(start)
 * slice(start, end)
 */

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// -------------------------------------------

//! splice(): Adds, removes, or replaces elements in an array. It change the original array--------------
/*
 * splice(start)
 * splice(start, deleteCount)
 * splice(start, deleteCount, item1)
 * splice(start, deleteCount, item1, item2)
 * splice(start, deleteCount, item1, item2,  …,  itemN)
 */

console.log(animals); //* [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]

let mynA = animals.splice(2);
console.log(mynA); //* [ 'camel', 'duck', 'elephant' ]

console.log(animals); //* [ 'ant', 'bison' ]

//* ----------------------------

const months = ["Jan", "March", "April", "June"];
console.log(months); //* [ 'Jan', 'March', 'April', 'June' ]

months.splice(1, 0, "Feb");
// Inserts at index 1 without deleting element
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(3, 2, "May");
// Replaces 2 element at index 3
console.log(months);
// Expected output: Array [ 'Jan', 'Feb', 'March', 'May' ]

// -------------------------------------------

//!

// -------------------------------------------

//!
