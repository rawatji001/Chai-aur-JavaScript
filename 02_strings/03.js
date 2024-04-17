const str = "Hello!";
const str2 = "Roshan Ji ";

//Repeat---------------
console.log(`${str} ${str2.repeat(3)}`);

//! Replace------------------ in this only one word can change------
console.log(`${str} ${str2.replace("Ji", "Rawat")}`);

//---------------------------------------
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i; // --- regular expression and we see that here 'dog' is in upper case but above dog is in lower case so 'i' is used to make it insensitive -----------

console.log(paragraph.replace(regex, "parrot"));
// Expected output: "I think Ruth's parrot is cuter than your dog!"

// ----------------- 

//! ReplaceAll------------------ in this all words can change------

console.log(`${str} ${str2.replace("Ji", "Rawat")}`);

//---------------------------------------
const paragraph2 = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph2.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"

const regex2 = /Dog/gi; // --- regular expression and we see that here 'dog' is in upper case but above dog is in lower case so 'i' is used to make it insensitive and "g" is used to check all same words in para-----------

console.log(paragraph2.replace(regex2, "parrot"));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
