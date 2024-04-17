//! storing function in a variable---------------------

const one = function () {
  console.log("In the one function");
};

one();

// -------------------------------------------------------------

//! Arrow function--------------------

// -------------------------------------------------------------

const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(54, 6));
// -------------------------------------------------------------

//! short hand of arrow function----------
const add1 = (n1, n2) => n1 + n2; //* but we have use only when we have to return single value--------------

console.log(add1(23, 7));
