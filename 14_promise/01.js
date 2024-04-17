const promiseOne = new Promise(function (resolve, reject) {
  //--used for : -------
  //1- Do an async task, 2- DB Calls, 3- Cryptography, 4- Network......etc

  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// Promise two-----
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task-2 is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise-2 consumed");
});
