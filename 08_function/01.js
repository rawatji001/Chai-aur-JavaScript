//! Creating Function

//* Function definition---------------

function sayHello() {
  console.log("Hey! Welcome to JS Series");
}

//* Function Call----------

sayHello(); // Hey! Welcome to JS Series

// ------------------------------------

//! Write a function to Add to numbers------------

function addTwoNum(num1, num2) {
  //* here num1 and num2 is parameters--------
  console.log(num1 + num2);
}

addTwoNum(2, 5); // 7 //* here 2 and 5 is arguments--------

addTwoNum(5, 8); // 13

// --------------------------------------

//! Write a function with return keyword-------------
function sayHii() {
  // return "Hello! JS User"; //! you can return directly........

  let say = "Hello! JS User"; //! you can return with variable.........
  return say;
}

sayHii(); // not returning anything because we returning something so we have to store this in variable or directly print this value---------

//-------------------------------

console.log(sayHii()); // Hello! JS User

// ----------------------------

let msg = sayHii();
console.log(msg); // Hello! JS User

// ------------------------------------

//! Write a function to subtract two number with return keyword
function subTwoNum(num1, num2) {
  return num1 - num2;
}

console.log(subTwoNum(45, 25)); // 20

console.log(subTwoNum(5, 20)); // -15

let ans = subTwoNum(42, 2);
console.log(ans); // 40

// ------------------------------------

//! Write a function to multiply two number with default parameter--------

function multi(num1 = 2, num2 = 5) {
  return num1 * num2;
}

let result = multi(); //* it is taking default numbers......
console.log(result); // 10

// -----------------------------

console.log(multi(25, 3)); // 75
