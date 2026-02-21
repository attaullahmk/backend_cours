# Day 3: JavaScript Arrays (Synchronized Notes)

This file now follows the same order as `week1/day3.js`.

## Topic 1: What is an Array?
An array stores multiple values in one variable. Arrays are ordered and zero-indexed.

```js
const mixed = [1, "hello", true, null];
console.log(mixed[1]); // hello
```

## Topic 2: Arrays are Objects
Arrays are a special type of object in JavaScript.

```js
const arr = [1, 2, 3];
console.log(typeof arr); // object
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
```

## Topic 3: Array vs Object
Arrays use numeric indexes. Objects use named keys.

```js
const fruits = ["Banana", "Orange", "Apple"];
const user = { name: "Ali", age: 20 };

console.log(fruits[0]); // Banana
console.log(user.name); // Ali
```

## Topic 4: Correct Array Type Checking
Use `Array.isArray()` for reliable checks.

```js
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits instanceof Array); // true
```

## Topic 5: `length` Property
`length` gives size, can truncate array, and helps append values.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); // 4

fruits.length = 2;
console.log(fruits); // ["Banana", "Orange"]

fruits[fruits.length] = "Kiwi";
console.log(fruits); // ["Banana", "Orange", "Kiwi"]
```

## Topic 6: `toString()`, `join()`, `at()`
- `toString()` converts array to comma-separated string.
- `join()` lets you choose a separator.
- `at(-1)` accesses from end.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString()); // Banana,Orange,Apple,Mango
console.log(fruits.join(" * ")); // Banana * Orange * Apple * Mango
console.log(fruits.at(-1)); // Mango
```

## Topic 7: `concat()` and `flat()`
- `concat()` returns a merged new array.
- `flat(depth)` flattens nested arrays.

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2)); // [1,2,3,4]

const nested = [[1, 2], [3, 4], [5, [6]]];
console.log(nested.flat(1)); // [1,2,3,4,5,[6]]
console.log(nested.flat(2)); // [1,2,3,4,5,6]
```

## Topic 8: `splice()` vs `slice()`
- `splice()` changes original array.
- `slice()` returns new array and keeps original unchanged.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const removed = fruits.splice(2, 1, "Lemon", "Kiwi");

console.log(removed); // ["Apple"]
console.log(fruits); // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]

const part = fruits.slice(1, 3);
console.log(part); // ["Orange", "Lemon"]
```

## Topic 9: Rest and Spread (`...`)
- Rest collects remaining values.
- Spread expands values.

```js
const values = [1, 2, 3, 4, 5];
const [first, second, ...rest] = values;
console.log(first, second, rest); // 1 2 [3,4,5]

const a = [10, 20];
const b = [30, 40];
console.log([...a, ...b]); // [10,20,30,40]
```

## Topic 10: `forEach()` and `map()`
- `forEach()` for side effects, returns `undefined`.
- `map()` returns a transformed new array.

```js
const numbers = [1, 2, 3];

const x = numbers.forEach((n) => console.log(n * 2));
console.log(x); // undefined

const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2,4,6]
```

## Topic 11: `filter()`, `find()`, `some()`, `every()`
- `filter()` returns all matches.
- `find()` returns first match.
- `some()` checks any match.
- `every()` checks all match.

```js
const nums = [5, 1, 4, 1, 3, 8, 10];
console.log(nums.filter((n) => n % 2 === 0)); // [4,8,10]

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" }
];
console.log(users.find((u) => u.id === 2)); // { id: 2, name: "Ahmed" }

const ages = [12, 17, 18];
console.log(ages.some((age) => age >= 18)); // true

const scores = [80, 90, 100];
console.log(scores.every((score) => score >= 50)); // true
```

## Topic 12: `reduce()`
`reduce()` converts an array into one value.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // 10

const max = numbers.reduce((acc, current) => (current > acc ? current : acc), numbers[0]);
console.log(max); // 4
```

## Topic 13: `includes()`, `indexOf()`, `lastIndexOf()`
Used to search values and positions.

```js
const colors = ["red", "blue", "green", "blue"];

console.log(colors.includes("blue")); // true
console.log(colors.indexOf("blue")); // 1
console.log(colors.lastIndexOf("blue")); // 3
```

## Topic 14: `sort()`, `reverse()`, `fill()`
- `sort()` mutates original array.
- For numbers, use compare callback.
- `fill()` writes a static value in range.

```js
const nums = [40, 100, 1, 5];
nums.sort((a, b) => a - b);
console.log(nums); // [1,5,40,100]

nums.reverse();
console.log(nums); // [100,40,5,1]

const items = [1, 2, 3, 4];
items.fill("x", 1, 3);
console.log(items); // [1,"x","x",4]
```

## Quick Revision
- Arrays are ordered, zero-indexed, and dynamic.
- Arrays are objects with special methods.
- Use `Array.isArray()` for type checks.
- Learn mutable vs immutable methods (`splice` vs `slice`, `sort` vs `toSorted`).
- Use callbacks correctly in `map`, `filter`, `reduce`.
