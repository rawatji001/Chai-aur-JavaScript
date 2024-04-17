//! function with array------------

function getArray(anyArray) {
  console.log(
    `In Array : 1 index value is ${anyArray[0]}, 2 index value is ${anyArray[1]}, 3 index value is ${anyArray[2]}`
  );
}

//! delare array-------------

const myArray = [254, "Roshan", 25.55, true, "Hello!"];

getArray(myArray);
//* In Array : 1 index value is 254, 2 index value is Roshan, 3 index value is 25.55

// ----------------------------------

//! we can directly pass array to the function------

getArray([24, 56, "RawatJi", "Hello"]);
//* In Array : 1 index value is 24, 2 index value is 56, 3 index value is RawatJi
