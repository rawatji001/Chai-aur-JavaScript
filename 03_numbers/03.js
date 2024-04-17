// In JavaScript, the 'Number.isFinite()' function is used to determine whether a given value is a finite number. A finite number is any real number that is not infinite or not NaN (Not-a-Number). Here's how it works:

console.log(Number.isFinite(42)); // true

console.log(Number.isFinite(-123.456)); // true

console.log(Number.isFinite(Infinity)); // false

console.log(Number.isFinite(-Infinity)); // false

console.log(Number.isFinite(NaN)); // false

console.log(Number.isFinite("Roshan")); // false

console.log(Number.isFinite(1544 / 65)); // true

console.log(Number.isFinite(15465 * 25)); // true
