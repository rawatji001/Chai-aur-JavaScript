//find largest and second largest number

function largestAndSecondLargest(arr) {
  if (arr.length < 2) {
    throw new Error(
      "Array must atleast contain two number to execute this code!!"
    );
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return {
    largest: largest,
    secondLargest: secondLargest,
  };
}

//example usage--------

const n1 = [2, 4, 1, 6, 7, 2, 3, 8];
const n2 = [2, 2, 2];
// const n3 = [2];

const r1 = largestAndSecondLargest(n1);
const r2 = largestAndSecondLargest(n2);
// const r3 = largestAndSecondLargest(n3);

console.log(`Largest: ${r1.largest}, secondLargest: ${r1.secondLargest}`);
console.log(`Largest: ${r2.largest}, secondLargest: ${r2.secondLargest}`);
// console.log(`Largest: ${r3.largest}, secondLargest: ${r3.secondLargest}`);
