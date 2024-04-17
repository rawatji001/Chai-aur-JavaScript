const start = document.getElementById("start");
const stop = document.getElementById("stop");
const body = document.querySelector("body");
//get random color

const randomColor = () => {
  let letters = "0123456789abcdef";
  let color = "#";

  for (let i = 1; i <= 6; i++) {
    color += letters[parseInt(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangeBgColor = () => {
  function changebg() {
    body.style.backgroundColor = randomColor();
  }

  if (!intervalId) {
    intervalId = setInterval(changebg, 1000);
  }
  //   intervalId = setInterval(changebg, 1000);
};

const stopChangeBgColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

start.addEventListener("click", startChangeBgColor);
stop.addEventListener("click", stopChangeBgColor);
