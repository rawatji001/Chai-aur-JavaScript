//! function in object---------------

//! object--------
const jsUser = {
  name: "Roshan",
  email: "rr@gmail.com",
  phone: 91000044000,
};

//! function declare-------
jsUser.greeting = function () {
  console.log("Hello Js User");
};

jsUser.greeting(); // Hello Js User

//-----------------------

//! function with above referance or this keyword(it refer to above object)---------

jsUser.greeting2 = function () {
  console.log(`Hello Js user ${this.name}`);
};

jsUser.greeting2(); // Hello Js user Roshan
