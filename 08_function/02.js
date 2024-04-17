//! Function using rest(...n) operator------------

//! normal function------
function shopingCart(val1) {
  return val1;
}

console.log(shopingCart(259, 269, 299)); // 259 -- here it is only print.......

// --------------------------------

//! function using rest operator with single parameter---------
function cartValue(...val1) {
  return val1;
}
console.log(cartValue(254, 65, 789, 45, 299));
// [ 254, 65, 789, 45, 299 ] --- it returning all the value in an array.......

// --------------------------------

//! function using rest operator with multiple parameter---------
function shopinCartValue(val1, val2, ...val3) {
  console.log(val1);
  console.log(val2);
  console.log(val3);
}
shopinCartValue(254, 65, 789, 45, 299);
//it returning 3 values in val3 because first two value is assigned to other parameters val1 and val2.......

/*
254 --- val1

65 --- val2

[ 789, 45, 299 ] --- val3
*/
