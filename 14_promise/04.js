const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Rawat", email: "rawat@example.com" });
    } else {
      reject("ERROR: User went wrong.....!!!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("The promise is either resolved or rejected");
  }
}

consumePromiseFive();
