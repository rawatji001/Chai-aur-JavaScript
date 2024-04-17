//! Create array--------

const myArray = [1, 5, 3, 4, 6, 7]; //Array literals

const myArray2 = [4, "hello", true, 45.25];

const myArray3 = new Array(45, "Roshan", 65, 25); //Array constructor

const myEmptyArray = []; //* Empty array----------

//! Some basic operations------------

// ===============================================

//! push(): Adds elements to the end of an array.
console.log(myArray); //* [ 1, 5, 3, 4, 6, 7 ]

myArray.push(45, 78, "Roshan");

console.log(myArray); //* [ 1, 5, 3, 4, 6, 7, 45, 78, 'Roshan' ]
// -------------------------------------------

//! pop(): Removes the last element from an array.
console.log(myArray2); //* [ 4, 'hello', true, 45.25 ]

myArray2.pop();

console.log(myArray2); //* [ 4, 'hello', true ]
// -------------------------------------------

//! unshift(): Adds elements to the beginning of an array.
console.log(myArray3); //* [ 45, 'Roshan', 65, 25 ]

myArray3.unshift("Rawat", 14, 25);

console.log(myArray3); //* [ 'Rawat', 14, 25, 45, 'Roshan', 65, 25 ]
// -------------------------------------------

//! shift(): Removes the first element from an array.
console.log(myArray3); //* [ 'Rawat', 14, 25, 45, 'Roshan', 65, 25 ]

myArray3.shift();

console.log(myArray3); //* [ 14, 25, 45, 'Roshan', 65, 25 ]
// -------------------------------------------

//! concat(): Combines two or more arrays to create a new array.
console.log(myEmptyArray); //* []

const myEmptyArrayNew = myEmptyArray.concat(myArray, myArray2);

console.log(myEmptyArrayNew); /*
[
    1,  5,       3,
    4,  6,       7,
    45, 78,      'Roshan',
    4,  'hello', true
  ]

*/
// -------------------------------------------
