//! Write a for loop that prints numbers from 1 to 5.

for (let i = 1; i <= 5; i++) {
  //   console.log(i);
}

//-----------------------------------------------------

//! Create a for loop that prints even numbers from 9 to 100.

for (let i = 9; i <= 100; i++) {
  if (i % 2 == 0) {
    // console.log(i);
  }
}

//-----------------------------------------------------

//! Create a for loop that prints odd numbers from 19 to 50.

for (let i = 19; i <= 50; i++) {
  if (i % 2 == 0) {
    continue;
  }
  //   console.log(i);
}

//-----------------------------------------------------

//! Given an array of names, use a for loop to print each name.
const arr = ["harry", "johny", "batman", "superhero", "sunny"];
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

//-----------------------------------------------------

//! Write a for loop that prints numbers from 10 to 1.
for (let j = 10; j >= 1; j--) {
  //   console.log(j);
}

//-----------------------------------------------------

//! Use a for loop to calculate the sum of elements in an array of numbers.
const arrNo = [12, 23, 34, 45, 56, 67];

let sum = 0;
for (let i = 0; i < arrNo.length; i++) {
  sum += arrNo[i];
}
// console.log(sum);

//-----------------------------------------------------

//! Create a nested for loop to print a square pattern of asterisks (e.g., a 4x4 square).
let num = 5;

for (let i = 1; i <= num; i++) {
  let row = "";
  for (let j = 1; j <= num; j++) {
    row += "* ";
  }
  //   console.log(row);
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    console.log("* ");
  }

  console.log(`\n`);
}
//-----------------------------------------------------

//! Write a for loop that prints numbers from 10 to 1.


//-----------------------------------------------------

//! Write a for loop that prints numbers from 10 to 1.
