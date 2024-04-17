const str = "Hello Roshan";

// Get character----------

console.log(str.charAt(7)); //*---- first trick
console.log(str[3]); //*---- second trick

//Get indexValue---------

console.log(str.indexOf("o")); // ---- 4
console.log(str["l"]); // ------ undefined--its not applicable for string it is onli apply on array....

// Get length of the string------------
let str2 = "Hola Amigo, Str Length :";
console.log(`${str2} ${str2.length}`);

// to Upper case----
console.log(str.toUpperCase());

// to Lower case----
console.log(str.toLowerCase());
