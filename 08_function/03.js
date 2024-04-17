//! function with object------------

function userDetails(anyObject) {
  console.log(
    `User name is ${anyObject.userName}, user age is ${anyObject.userAge} and user city is ${anyObject.city}`
  );
}

//! userDetails(); // error because we have to pass any object here

// -------------------------

//* declare object--------

const user = {
  userName: "Roshan",
  userAge: 19,
  city: "Delhi",
};

userDetails(user);
//* User name is Roshan, user age is 19 and user city is Delhi

// -------------------

//! we can directly pass object to the function------

userDetails({
  userName: "Vikash",
  userAge: 22,
  city: "Noida",
});
//* User name is Vikash, user age is 22 and user city is Noida
