//! some objects method---------

const jsUser = {
  name: "Roshan",
  email: "rr@gmail.com",
  phone: 91000044000,
  address: "Delhi",
  isLogin: true,
  loginDays: ["Monday", "Wednesday", "Friday"],
};

//! to get all the keys--------

console.log(Object.keys(jsUser)); //* it returns ans in array-------
// [ 'name', 'email', 'phone', 'address', 'isLogin', 'loginDays' ]

//--------------------------------------------

//! to get all the values--------

console.log(Object.values(jsUser)); //* it returns ans in array-------
/*
[
  'Roshan',
  'rr@gmail.com',
  91000044000,
  'Delhi',
  true,
  [ 'Monday', 'Wednesday', 'Friday' ]
]
*/

//--------------------------------------------

//! to get all the entries--------

console.log(Object.entries(jsUser)); //* it returns ans in array. every single key-value in array---------------
/*
[
  [ 'name', 'Roshan' ],
  [ 'email', 'rr@gmail.com' ],
  [ 'phone', 91000044000 ],
  [ 'address', 'Delhi' ],
  [ 'isLogin', true ],
  [ 'loginDays', [ 'Monday', 'Wednesday', 'Friday' ] ]
]
*/

//--------------------------------------------

//! to get length of the object--------

console.log(jsUser.length); //* it returns ans in array-------
// [ 'name', 'email', 'phone', 'address', 'isLogin', 'loginDays' ]

//--------------------------------------------

//--------------------------------------------

//! to check object have property or not--------

console.log(jsUser.hasOwnProperty("isLogin")); //* it returns ans in true or false-------
// true

console.log(jsUser.hasOwnProperty("isLogOut")); //* it returns ans in true or false-------
// false
