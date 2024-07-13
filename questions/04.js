// sorting in js

function sorting(arr) {
  let swap;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
      }
    }
  }
  return arr;
}

let arr = [1, 7, 4, 2, 8, 4, 7];

let result = sorting(arr);
console.log(result);
