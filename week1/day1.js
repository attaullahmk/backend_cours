//function 
// console.log(greet("hi"));

function greet(name) {  
  console.log("Hello " + name);
  return 2;
}

// greet("Ali");      

// let a =22;

// console.log(a)
function add(a=2, b=3) {
  return a + b;
}

// let host = function add( fun){
//   console.log("host hi")
//   fun();
// }

// host(add);






console.log('today');


let obj = {
  a : 'e',
  add : function method(){
    console.log(this.a)
  }
}

let obj1 = {
  a : 'e',
  add : () => {
    console.log(this)
  }
}

// console.log(obj.add())
// console.log(obj1.add())


function processUser(name, callback) {
  console.log("Processing " + name);
  callback();
}

let host = function add( fun){
  console.log("host hi")

}
// processUser("Ali", function() {
//   console.log("Done!");
// });

processUser("Ali", host );


// def* numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// };

// const gen = numbers();
// console.log(gen.next().value);



// function add(a, b=3) {
//   return a + b;
// }

// let result = add(5, 3);
// let result = add(2);
// console.log("result ", result);


// function greet(name) {   // ← declaration
//   console.log("Hello " + name);  // ← definition (logic)
// }

// const add = function(a, b) {
//   return a + b;
// };

// Here:
// const add → declares a variable named add
// function(a, b) { return a + b; } → defines the function
// So the function is defined and assigned, not declared in the classic way.










// function greet(name) {   // ← name is PARAMETER
//   console.log("Hello " + name);
// }

// greet("Ali");            // ← "Ali" is ARGUMENT





// function greet(name = "Guest") {
//   console.log("Hello " + name);
// }

// greet();  // Hello Guest

// sum(1, 2, 3, 4);
 
function sum(...numbers) {
  console.log(numbers);
}

// ...numbers collects all arguments into an array.



//regular function 
// function multiply(a, b) {
//   return a * b;
// }

// //arrow function
// const multiply = (a, b) => a * b;





// Regular Functions Have arguments
// function show() {
//   console.log(arguments);
// }

// show(10, 20, 30);
// Regular functions automatically provide arguments.


// Arrow Functions DO NOT Have arguments
// const show = () => {
//   console.log(arguments); // ❌ Error
// };

// show(10, 20);
// Arrow functions don't create their own arguments.




// ✔ Use rest parameters instead:
// const show = (...args) => {
//   console.log(args);
// };





// Regular functions create their own this, arrow functions don't.

const user = {
  name: "Ali",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

// user.greet();

// ✔ Works because regular functions bind their own context.


// Arrow Function Problem
const user1 = {
  name: "Ali",
  greet: () => {
    console.log(this.name);
    console.log(this)
  }
};

// user1.greet(); // undefined

// Arrow functions inherit this from outside, which can break logic.







// type of function 

// regular function 
// function add(a, b) {
//   return a + b;
// }

// let result = add(5, 3);
// console.log(result); // 8






// Arrow Function
// An arrow function is a compact syntax for writing functions using the => (arrow) symbol.
// It does the same job as a regular function but with less code and different behavior for this.

// const add = (a, b) => {
//   return a + b;
// };



// ✨ Shorter Version (Implicit Return)
// If the function has only one line, you can skip {} and return.
// 👉 Automatically returns the result.

// const add = (a, b) => a + b;
// console.log(add(1,2))


// 📌 If Only One Parameter
// You can remove parentheses:
// const greet = name => "Hello " + name;
// console.log(greet('khan'));

// 📌 If No Parameters
// Use empty parentheses:

const sayHi = () => "Hi!";
// console.log(sayHi())



// 📦 Best Places to Use Arrow Functions
// 1️⃣ Inside Array Methods

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
// ✔ Perfect for short operations.


// 2️⃣ Callbacks
setTimeout(() => {
  console.log("Runs later");
}, 1000);

// 3️⃣ Functional Programming Style
const square = x => x * x;



// ❌ When NOT to Use Arrow Functions
// Avoid arrow functions when:
// ❌ Creating object methods
// ❌ Using this
// ❌ Constructor functions
// ❌ When you need arguments object









function processUser(name, callback) {
  console.log("Processing " + name);
  callback();
}

processUser("Ali", function() {
  console.log("Done!");
});


//IIF
(function() {
  console.log("I run immediately!");
})();


// constructor 
function User(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function() {
    console.log("Hello " + this.name);
  };
}

const u1 = new User("Ali", 22);
// u1.greet();





// async 
async function getData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();

  console.log(data);
}




//
function* counter() {
  let i = 1;

  while (true) {
    yield i++;
  }
}

const count = counter();

console.log(count.next()); // 1
console.log(count.next().value); // 2
console.log(count.next().value); // 3

function runCounter() {
  const value = count.next().value;
  console.log(value);

  setTimeout(runCounter, 1000); // call again after 1 sec
}

// runCounter()



//Infinite Scrolling = Load small data chunks when user reaches bottom instead of loading everything at once.
// Why we use it?
// Faster page load 🚀
// Saves bandwidth 📉
// Better mobile performance 📱
// Database is queried in pages instead of millions of rows.