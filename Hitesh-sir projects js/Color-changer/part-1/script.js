const box = document.querySelector(".box");

const body = document.querySelector("body");

// generate random color--------
const randomColor = () => {
  const num = Math.floor(Math.random() * 16777215);
  const color = num.toString(16);
  return "#" + color;
};

const changeColor = () => {
  box.addEventListener("click", (el) => {
    body.style.backgroundColor = randomColor();
    box.innerHTML = randomColor()
  });
};

changeColor()