// removing//

function remove(arr, key) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != key) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let arr = [3, 4, 3, 2, 5, 2, 3];
let removeEl = 5;
let result = remove(arr, removeEl);
