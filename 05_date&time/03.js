//! some get method--------------

const myDate = new Date();

//! get year-------
console.log(myDate.getFullYear()); //* 2023

//! get month-------
console.log(myDate.getMonth() + 1); //* 11

//! get day-------
console.log(myDate.getDate()); //* 6

//! to get date with own formate-----------
const today = new Date();
const customDate = `${
  today.getMonth() + 1
}/${today.getDate()}/${today.getFullYear()}`;
console.log(customDate); //* 11/6/2023

//! get time -----------------------------------
//* hour-------
console.log(myDate.getHours()); //* 8

//* minutes-------
console.log(myDate.getMinutes()); //* 18

//* second-------
console.log(myDate.getSeconds()); //* 41

//* miliseceond-------
console.log(myDate.getMilliseconds()); //* 785

//* time-------
console.log(myDate.getTime()); //* in milisecond

//! to get time with own formate----------
const myTime = new Date();
const myCustomTime = `${myTime.getHours()}h:${myTime.getMinutes()}m:${myTime.getSeconds()}s`;
console.log(myCustomTime); //* 8h:23m:39s

//! To get Date and Time ---------------------
const mycustom = new Date();
const myCreate = `${mycustom.getDate()}-${
  mycustom.getMonth() + 1
}-${mycustom.getFullYear()} ${myTime.getHours()}h:${myTime.getMinutes()}m:${myTime.getSeconds()}s`;

console.log(myCreate); //* 6-11-2023 8h:26m:34s
