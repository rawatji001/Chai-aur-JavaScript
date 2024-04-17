let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

let randomColor = () => {
  let letters = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[parseInt(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

const handleButton1 = () => {
  let rgb1 = randomColor();
  console.log(rgb1);
};

const handleButton2 = () => {
  let rgb2 = randomColor();
  console.log(rgb2);
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
