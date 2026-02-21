// Day 3: JavaScript Arrays (Clean + Explained)
// Each topic has:
// 1) Short explanation
// 2) Practical example
// 3) Correct, runnable code





// ==================================================
// TOPIC 1: What is an Array?
// ==================================================
// An array stores multiple values in one variable.
// Arrays are ordered and zero-indexed.
// That means first item is at index 0.
{
  const mixed = [1, "hello", true, null];
  console.log("Topic 1:", mixed[1]); // hello
}





// ==================================================
// TOPIC 2: Arrays are Objects
// ==================================================
// In JavaScript, arrays are a special type of object.
// So `typeof []` returns "object".
// Arrays get methods from Array.prototype.
{
  const arr = [1, 2, 3];
  console.log("Topic 2 typeof:", typeof arr); // object
  console.log("Topic 2 prototype check:", Object.getPrototypeOf(arr) === Array.prototype); // true
}





// ==================================================
// TOPIC 3: Array vs Object
// ==================================================
// Arrays use numeric indexes: 0, 1, 2...
// Objects use named keys: name, age...
// Use arrays for lists, objects for records.
{
  const fruits = ["Banana", "Orange", "Apple"];
  const user = { name: "Ali", age: 20 };

  console.log("Topic 3 array access:", fruits[0]); // Banana
  console.log("Topic 3 object access:", user.name); // Ali
}





// ==================================================
// TOPIC 4: Correct Array Type Checking
// ==================================================
// Use Array.isArray(value) for reliable checking.
// `instanceof Array` also works in most same-realm cases.
{
  console.log("Topic 4 isArray([]):", Array.isArray([])); // true
  console.log("Topic 4 isArray({}):", Array.isArray({})); // false

  const fruits = ["Banana", "Orange", "Apple"];
  console.log("Topic 4 instanceof:", fruits instanceof Array); // true
}





// ==================================================
// TOPIC 5: length Property
// ==================================================
// `length` gives total elements.
// You can also reduce length to truncate array.
// You can append using arr[arr.length] = value.
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log("Topic 5 original:", fruits, fruits.length); // 4

  fruits.length = 2;
  console.log("Topic 5 truncated:", fruits, fruits.length); // [Banana, Orange]

  fruits[fruits.length] = "Kiwi";
  console.log("Topic 5 appended:", fruits); // [Banana, Orange, Kiwi]
}





// ==================================================
// TOPIC 6: toString(), join(), at()
// ==================================================
// toString() converts array to comma string.
// join(separator) lets you choose separator.
// at(-1) reads from end (last element).
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  console.log("Topic 6 toString:", fruits.toString()); // Banana,Orange,Apple,Mango
  console.log("Topic 6 join:", fruits.join(" * ")); // Banana * Orange * Apple * Mango
  console.log("Topic 6 at(-1):", fruits.at(-1)); // Mango
}





// ==================================================
// TOPIC 7: concat() and flat()
// ==================================================
// concat() returns a new merged array.
// flat(depth) flattens nested arrays.
// Original arrays are not modified by concat.
{
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const merged = arr1.concat(arr2);

  console.log("Topic 7 concat:", merged); // [1, 2, 3, 4]

  const nested = [[1, 2], [3, 4], [5, [6]]];
  console.log("Topic 7 flat(1):", nested.flat(1)); // [1,2,3,4,5,[6]]
  console.log("Topic 7 flat(2):", nested.flat(2)); // [1,2,3,4,5,6]
}

// If you have no idea how deep the nesting goes but you want everything flattened into a single list, you can use Infinity:
// nested.flat(Infinity);





// ==================================================
// TOPIC 8: splice() vs slice()
// ==================================================
// splice() changes original array.
// slice() returns a new array, original unchanged.
// toSpliced() is modern immutable splice alternative.
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const removed = fruits.splice(2, 1, "Lemon", "Kiwi");

  console.log("Topic 8 splice removed:", removed); // [Apple]
  console.log("Topic 8 after splice:", fruits); // [Banana, Orange, Lemon, Kiwi, Mango]

  const citrus = fruits.slice(1, 3);
  console.log("Topic 8 slice result:", citrus); // [Orange, Lemon]
  console.log("Topic 8 original after slice:", fruits); // unchanged by slice
}





// ==================================================
// TOPIC 9: Rest and Spread (...)
// ==================================================
// Rest collects remaining values.
// Spread expands values.
// Same symbol, different use by context.
{
  const values = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = values;
  console.log("Topic 9 rest:", first, second, rest); // 1 2 [3,4,5]

  const a = [10, 20];
  const b = [30, 40];
  const combined = [...a, ...b];
  console.log("Topic 9 spread:", combined); // [10,20,30,40]
}





// ==================================================
// TOPIC 10: forEach() and map()
// ==================================================
// forEach() is for side effects, returns undefined.
// map() returns a new transformed array.
// Use map when you need a new result array.
{
  const numbers = [1, 2, 3];

  const forEachResult = numbers.forEach((num) => {
    console.log("Topic 10 forEach x2:", num * 2);
  });
  console.log("Topic 10 forEach return:", forEachResult); // undefined

  const doubled = numbers.map((num) => num * 2);
  console.log("Topic 10 map:", doubled); // [2,4,6]
}





// ==================================================
// TOPIC 11: filter(), find(), some(), every()
// ==================================================
// filter() returns all matches.
// find() returns first match.
// some() checks at least one, every() checks all.
{
  const numbers = [5, 1, 4, 1, 3, 8, 10];
  const evens = numbers.filter((n) => n % 2 === 0);
  console.log("Topic 11 filter evens:", evens); // [4,8,10]

  const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" }
  ];
  const found = users.find((u) => u.id === 2);
  console.log("Topic 11 find:", found); // { id: 2, name: "Ahmed" }

  const ages = [12, 17, 18];
  console.log("Topic 11 some >=18:", ages.some((age) => age >= 18)); // true

  const scores = [80, 90, 100];
  console.log("Topic 11 every >=50:", scores.every((score) => score >= 50)); // true
}





// ==================================================
// TOPIC 12: reduce()
// ==================================================
// reduce() converts array into one value.
// Common uses: sum, max, count, grouping.
// Always pass initial value for safer behavior.
{
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  console.log("Topic 12 sum:", sum); // 10

  const max = numbers.reduce((acc, current) => (current > acc ? current : acc), numbers[0]);
  console.log("Topic 12 max:", max); // 4
}





// ==================================================
// TOPIC 13: includes(), indexOf(), lastIndexOf()
// ==================================================
// includes() returns true/false.
// indexOf() gives first index or -1.
// lastIndexOf() gives last matching index.
{
  const colors = ["red", "blue", "green", "blue"];

  console.log("Topic 13 includes blue:", colors.includes("blue")); // true
  console.log("Topic 13 indexOf blue:", colors.indexOf("blue")); // 1
  console.log("Topic 13 lastIndexOf blue:", colors.lastIndexOf("blue")); // 3
}





// ==================================================
// TOPIC 14: sort(), reverse(), fill()
// ==================================================
// sort() mutates original array.
// For numbers, always provide compare function.
// fill() sets same value in full/partial range.
{
  const nums = [40, 100, 1, 5];
  nums.sort((a, b) => a - b);
  console.log("Topic 14 numeric sort asc:", nums); // [1,5,40,100]

  nums.reverse();
  console.log("Topic 14 reverse:", nums); // [100,40,5,1]

  const items = [1, 2, 3, 4];
  items.fill("x", 1, 3);
  console.log("Topic 14 fill partial:", items); // [1,"x","x",4]
}







// let numbers = [1, 2, 3];
// numbers.forEach((num, index) => {
//   console.log(`Index ${index} -> ${num * 2}`);
// });

let numbers = [1, 2, 3, 4];
let doubled = numbers.map((n) => n * 3);

console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4]


let nums = [10, 20, 30];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 60




let [first,second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]



// let arr = [10, 20, 30, 40];
// arr.splice(0, 3, 99, 100); // start at index 1, remove 2, insert 99 and 100

// console.log(arr); // [10, 99, 100, 40]




let nested = [1, [2, 3], [4, [5, 6 , [23,3]]]];

console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6]


let arr = new Array(5).fill(3);
console.log(arr); // [0, 0, 0, 0, 0]



console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({ a: 1 }));  // false
console.log(Array.isArray("hello"));   // false



let numss = [1, 2, 3];
let wrong = numss.map((n) => {
   return n * 2;
   });
console.log(wrong)













// const original = {
//   name: "John",
//   address: {
//     city: "New York",
//     zip: "10001"
//   }
// };

// // Using Object.assign() for shallow copy
// // const shallowCopy = Object.assign({}, original);

// const shallowCopy = {...original} ;
// shallowCopy.address.city = "lahor";


// console.log(shallowCopy);
// console.log(original);

// // Modifying a nested object in the shallow copy
// shallowCopy.address.city = "Los Angeles";

// console.log(original.address.city);  // Output: "Los Angeles"
// console.log(shallowCopy.address.city);  // Output: "Los Angeles"





const original = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001"
  }
};

// Using JSON methods for deep copy
// const deepCopy = JSON.parse(JSON.stringify(original));
const deepCopy = structuredClone(original);

// Modifying a nested object in the deep copy
deepCopy.address.city = "Los Angeles";

console.log(original.address.city);  // Output: "New York"
console.log(deepCopy.address.city);  // Output: "Los Angeles"
