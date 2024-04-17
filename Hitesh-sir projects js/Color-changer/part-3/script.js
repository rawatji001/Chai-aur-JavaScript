let boxes = document.querySelectorAll(".colorBox");

const button = document.querySelector(".button");

const body = document.querySelector("body");

// generate color---

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changeColors() {
  button.addEventListener("click", () => {
    boxes.forEach((box) => {
      let randColor = generateRandomColor();
      box.style.backgroundColor = randColor;
      box.innerHTML = randColor;

      box.addEventListener("click", () => {
        body.style.backgroundColor = box.innerHTML;
      });
    });
  });
}

changeColors();
