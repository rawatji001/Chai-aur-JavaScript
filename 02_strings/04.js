const str = "The quick brown fox jumps over the lazy dog.";

//! slice-----------

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

//! split---------------
const words = str.split(" "); //* agar ham yaha ek space de dete hai to ye word count kargega nhi to ye letters count karega---------------
console.log(words[4]);
// Expected output: "jumps"

const chars = str.split("");//* it's count letters
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
