// At a restaurant you ate: 1 Dal = 100rs, 2 Roti= 10*2rs, 1 Ice-cream = 30rs. Calculate and display the final bill amount...........

const totalBill = 100 + 10 * 2 + 30;
console.log(`Your total Bill is = ${totalBill}rs`);

// ----------------------------------------

//Calculate 18% GST on iPhone15 for rs 79,990 and 2 airpods for rs 24990 for each.................
const iPhone = 79900;
const airpods = 24990 * 2;
const bill = Math.round(((iPhone + airpods) * 18) / 100);
console.log(`Your Total GST amount is ${bill}rs`);

// ----------------------------------------

//Concate String with string and with number............
const str = "Hello! ";
const str2 = "My age is ";
const str3 = `Roshan Rawat`;
const num = 19;

console.log(str.concat(str2, num)); // string and number..........

console.log(str.concat(str3)); // string and string
// ----------------------------------------

// Create order sumary string and display in a popup.............
