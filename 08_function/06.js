//! Immediately Invoked Function Expressions (IIFE)..............

//* () (); --- first bracket ke andar sara function aayega and second bracket ka mtlb us function ko call karna hoga aur agar ham kuch arguement dete hai to vo bhi second bracket me jayega.......................

// -------------------------------------------------------------

//!named IIFE or we can say normal function IIFE------

(function sayHii() {
  console.log("Hola Amigo");
})();

// -------------------------------------------------------------
//! with parameters and arguements
const result = (function (num1, num2) {
  return num1 + num2;
})(6, 5);

console.log(result); //! hame return isme use karne ke liye ise ek variable me store karna hoga tab jake ye return print karega.........

// -------------------------------------------------------------

//!without named IIFE or we can say arrow function IIFE------

(() => {
  console.log("Hii!!!!!!!");
})();

// -------------------------------------------------------------

//! with parameters and arguements
((name) => {
  console.log(`Hii! ${name}`);
})("Roshan");
