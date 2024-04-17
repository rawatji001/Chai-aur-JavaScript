//! number to string------------------

let score = 34; //number

let stringScore = String(score);

console.log(stringScore);
console.log(typeof stringScore);

//! number to boolean------------------

let num = 45; // 0 = false, 1 = true, and any number  = true--------
let boolNum = Boolean(num);

console.log(boolNum);
console.log(typeof boolNum);

//number to undefined
// let uNum = 45;
// let UndeNum = undefined(uNumnum);

// console.log(UndeNum);
// console.log(typeof UndeNum);
// ? nothing like this -----------

//------------------------------------------------------------

// ! string to number-----------------------------

let numString = "344";
let strintToNum = Number(numString);

console.log(strintToNum); //* 344
console.log(typeof strintToNum); //* number

//-----------------------------------------

let str = "roshan";
let strToNum = Number(str);

console.log(strToNum); //* NaN
console.log(typeof strToNum); //* number

// ! string to boolean--------------------------

let boolString = "344";
let strintToBool = Boolean(numString);

console.log(strintToBool); //* true
console.log(typeof strintToBool); //* Boolean

//-----------------------------------------

let str2 = "roshan";
let strToBoole = Boolean(str2);

console.log(strToBoole); //* true
console.log(typeof strToBoole); //* Boolean

//-----------------------------------------

let str3 = " ";
let strToBool2 = Boolean(str2);

console.log(strToBool2); //* true
console.log(typeof strToBool2); //* Boolean


// ! null to boolean--------------------------
let n1 = null
let n1ToBool = Boolean(n1);
console.log(n1ToBool); //* false because null = 0(false)
console.log(typeof n1ToBool); //* Boolean