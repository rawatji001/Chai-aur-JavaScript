//---------------------------------------------
const num = 100002;
const num2 = 13883938.30383;
const num3 = 136738 / 254;
const num4 = new Number(54755 * -525);

//! to fixed()----it fixed the value of float number by 1,2,3,4....and more.
console.log(num.toFixed(2));

console.log(num2.toFixed(2));

console.log(num3.toFixed(2));

console.log(num4.toFixed(2));

//------------------------------

console.log("Precision");

//! toPrecision()--------------------- isme ham point se pehle ka value dekhte hai agar vo precision value se chota ya barabar hota hai to ye usi ko change kar dega otherwise point ke baad wale number ko---------------

let numb1 = 1092;
let numb2 = 23.56;
let numb3 = 123.3484;
let numb4 = 1123.45643;

console.log(numb1.toPrecision());

console.log(numb2.toPrecision(2));

console.log(numb3.toPrecision(3));

console.log(numb4.toPrecision(2));
