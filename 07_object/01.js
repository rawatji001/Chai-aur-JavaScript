//! Creating object using object literals--------------

//* Object Literal----------
const jsUser = {
  name: "Roshan",
  email: "rr@gmail.com",
  phone: 91000044000,
  address: "Delhi",
  isLogin: true,
  loginDays: ["Monday", "Wednesday", "Friday"],
};

//! to get object----------
console.log(jsUser.name); // Roshan

console.log(jsUser["name"]); // Roshan

// --------------------------

//! to change value of any key-----
console.log(jsUser.address); // Delhi
jsUser.address = "Noida";
console.log(jsUser.address); // Noida

// --------------------------

//! to add new key-value in the object -----------
jsUser.tech = "Html";
console.log(jsUser.tech); // Html

// --------------------------

//! to seal the object (After sealing we can't add new key-value. Only update)-----------

Object.seal(jsUser);

jsUser.website = "rr.com"; //* we can't add---
console.log(jsUser.website); // undefined

jsUser["tech"] = "JavaScript"; //* we can update---
console.log(jsUser.tech); // JavaScript
// --------------------------

//! to freeze the object (After freezing we can't add or update key-value)-----------
console.log(jsUser.email); // rr@gmail.com

Object.freeze(jsUser);

jsUser["email"] = "roshanrawat@gg.com";

console.log(jsUser.email); //rr@gmail.com (not change)
