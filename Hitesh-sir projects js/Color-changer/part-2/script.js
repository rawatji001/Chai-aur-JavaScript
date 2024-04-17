const colorBox = document.querySelector(".colorBox");

const button = document.querySelector(".button");

const body = document.querySelector("body");

const randomColor = () => {
  const letters = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = () => {
  button.addEventListener("click", (el) => {
    // button.style.backgroundColor = randomColor(); we can do this also to change the bgcolor of button..........
    const randColor = randomColor();

    colorBox.style.backgroundColor = randColor;

    colorBox.innerHTML = randColor;

    colorBox.addEventListener("click", () => {
      body.style.backgroundColor = colorBox.innerHTML;
    });
  });
};
changeColor();
