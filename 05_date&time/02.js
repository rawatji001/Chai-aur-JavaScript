//! creating our own date---------------

//? some formate ---------
/**
 * "MM/DD/YYYY"
 * "YYYY-MM-DD"
 * "DD-MMM-YYYY"
 * "HH:MM:SS"
 */

const mydate = new Date(2024, 0, 10); //* in this month will start from 0.........
console.log(mydate.toLocaleDateString()); //10/1/2024

// ---------------------------

//! "MM/DD/YYYY"
const mydate2 = new Date("04/02/2024"); //* In string month will start from 1.........

console.log(mydate2.toDateString()); //* Tue Apr 02 2024

// --------------------------
//! "YYYY-MM-DD"
const mydate3 = new Date("2024-02-14");
console.log(mydate3.toDateString()); //* Wed Feb 14 2024

// --------------------------
//! "DD-MMM-YYYY"
const mydate4 = new Date("14-Jan-2023");
console.log(mydate4.toDateString()); //* Sat Jan 14 2023

// --------------------------
//! "HH:MM:SS"
const mytime = new Date("14-Jan-2023 04:44:32:23");
console.log(mytime.toLocaleTimeString()); //*4:44:32 am
// --------------------------

//! date and time
const myDatetime = new Date("14-Jan-2023 04:44:32:23");
console.log(mytime.toLocaleString()); //* 14/1/2023, 4:44:32 am

// --------------------------

const myDate = Date.now();
console.log(myDate); //--- 1699237079189 in milisceond
