//! concate or combined two or more objects-------------

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// -------------------------------------

const obj4 = { obj1, obj2, obj3 };
console.log(obj4); //* It returning nested object. Not in single object--------

/* 
{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'c', '4': 'd' },
  obj3: { '5': 'e', '6': 'f' }
}
*/

// --------------------------------------

//* Object.assign(target, source1,source2,...sourceN)

//* const obj = Object.assign({}, source1,source2,...sourceN)

//* we use "{}" to make sure that output will be in single object

const obj5 = Object.assign({}, obj1, obj2, obj3);

console.log(obj5); //* It returning single object---------
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// -------------------------------------

const obj6 = Object.assign(obj1, obj2, obj3);

console.log(obj6); //* It returning single object in (obj1)---------
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// -------------------------------------

//! Using spread operator

const obj7 = { ...obj1, ...obj2, ...obj3 };
console.log(obj7); //* It returning single object---------
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
