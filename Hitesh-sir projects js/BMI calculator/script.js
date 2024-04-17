const form = document.querySelector("form");
const refereshBtn = document.querySelector("#btn2");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);

  const weight = parseInt(document.getElementById("weight").value);

  const result = document.getElementById("result");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "Please enter a valid Height!!";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Please enter a valid Weight!!";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < "18.6") {
      result.innerHTML = `Your BMI is ${bmi}. It is Under Weight`;
    } else if (bmi > "18.6" && bmi < "24.9") {
      result.innerHTML = `Your BMI is ${bmi}. It is Normal Weight`;
    } else {
      result.innerHTML = `Your BMI is ${bmi}. It is Over Weight`;
    }
  }

  //   refereshBtn.addEventListener("click", (el) => {
  //     el.reload();
  //   });
});
