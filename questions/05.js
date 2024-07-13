const reverse = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[arr.length - 1 - i]);
  }
  return newArr;
};

let arr = [16, 3, 5, 6, 7, 3, 2];
let result = reverse(arr);
console.log(result);
