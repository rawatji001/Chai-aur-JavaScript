//! Creating Date----------- all of the below are current date and time

let myDate = new Date(); //* ------ current date and time

console.log(myDate); //* 2023-11-06T02:00:09.150Z ---- not readable

// --------------------------------------------

//* some methods on date-----------------------------------

// -----------------------------------------

console.log(myDate.toString()); //* Mon Nov 06 2023 07:30:52 GMT+0530 (India Standard Time) --- readable

console.log(myDate.toDateString()); //* Mon Nov 06 2023 ----- only date

console.log(myDate.toTimeString()); //* 07:35:38 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString()); //* 6/11/2023, 7:32:23 am

console.log(myDate.toISOString()); //* 2023-11-06T02:03:46.739Z

console.log(myDate.toLocaleDateString()); //* 6/11/2023 ----- current date

console.log(myDate.toLocaleTimeString()); //* 7:34:52 am --- current time

console.log(myDate.toUTCString()); //* Mon, 06 Nov 2023 02:07:46 GMT
