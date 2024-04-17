//! Creating object using singleton--------------

const obj1 = new Object(); //! singleton object--------
console.log(obj1); // {} empty object

// ------------------------------

const obj2 = {}; //! non-singleton object/literals--------
console.log(obj2); // {} empty object

//! object using singleton--------

const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Roshan";
tinderUser.isLoggedIn = true;

console.log(tinderUser); //* { id: '123abc', name: 'Roshan', isLoggedIn: true }

// -----------------------------------

