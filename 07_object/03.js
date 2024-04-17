//! declare a symbol and used in your object--------

//! symbol declaration-------
const mySymbol = Symbol("key1");

//! object--------
const jsUser = {
  name: "Roshan",
  mySymbol: "newSymbol1",
  email: "rr@gmail.com",
  phone: 91000044000,
};

console.log(jsUser.mySymbol); //* newSymbol1

console.log(typeof jsUser.mySymbol); //* string (returning string because symbol is not use in object like above)--------------------

console.log(jsUser);
/*
{
  name: 'Roshan',
  mySymbol: 'newSymbol1', //! used like string--------
  email: 'rr@gmail.com',
  phone: 91000044000
}
*/
// --------------------------------------

//! symbol declaration-------
const mySymbol2 = Symbol("key2");

//! object2--------
const jsUser2 = {
  name: "Roshan",
  [mySymbol2]: "newSymbol2", //! this is the correct syntax for using symbol-----
  email: "rr@gmail.com",
  phone: 91000044000,
};

console.log(typeof jsUser2.mySymbol2); //* error because we can't get symbol like this--------------------

console.log(jsUser2[mySymbol2]); //*newSymbol2 --------------------

console.log(jsUser2);
/*
{
  name: 'Roshan',
  email: 'rr@gmail.com',
  phone: 91000044000,
  [Symbol(key2)]: 'newSymbol2' //! used like symbol--------
}
*/
