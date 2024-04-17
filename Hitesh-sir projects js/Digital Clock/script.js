const clock = document.getElementById("clock");

let date = new Date();
let time = date.toLocaleTimeString();

// console.log(time);
// console.log(date.toLocaleTimeString);

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  clock.innerHTML = time;
}, 1000);
