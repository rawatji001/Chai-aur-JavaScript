//! Math.random() used to returns a floating-point, random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

console.log(Math.random()); //every time different float number.......

//! with specific range----------------
let min = 10;
let max = 20;

// const randomNum = Math.round(Math.random(max - min + 1 + min));
const randomNum = Math.round(Math.random() * (max - min) + min);
console.log(randomNum);

//! make a dice game to number b/w 1 to 6-------
let minNum = 1;
let maxNum = 6;

let diceNum = Math.round(Math.random() * (maxNum - minNum) + minNum);
console.log(diceNum);
