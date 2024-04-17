const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Roshan", email: "roshan@example.com" });
    } else {
      reject("ERROR: Something went wrong......!!!!");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((usernameOfUser) => {
    console.log(usernameOfUser);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));
