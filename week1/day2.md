✅ What is an Object in JavaScript?
==================================

An **Object** is a collection of **data + behavior**.

It stores information in **key–value pairs**.

📦 Think of object like a **real-world box** that holds properties about something.

🧠 Real Life Example
--------------------

A **student** has:

*   name
    
*   age
    
*   course
    
*   greet()
    

This is exactly how we model things using objects.

✅ Why Do We Use Objects?
========================

Because real applications deal with **things**, not just values.

Without objects ❌

```javascript
  let name = "Ali"; 
  let age = 22;
  let course = "CS";  
   ```

With objects ✅ (organized)

```javascript 

  let student = {   
     name: "Ali", 
     age: 22,
     course: "CS"
    };   

```

Objects help with:

✔ Grouping related data

✔ Modeling real-world entities

✔ Writing scalable code

✔ Avoiding messy variables

✔ Creating reusable structures





✅ Object Syntax (Basic Structure)
=================================

```javascript 
  let objectName ={  
    key1: value1,
    key2: value2  
       };   
```

✅ Example Object
================

```javascript
   let user ={    
    name: "Ahmed",    
    age: 25,    
    isLoggedIn: true
    };   
   ```



   
🔹 Syntax to Create an Object

✅ Method 1: Object Literal (most common)
  ```javascript
const person = {
  name: "Ali",
  age: 25,
  isStudent: true
};

console.log(person.name); // Ali
```

✅ Method 2: Using new Object()
  ```javascript
const person = new Object();
person.name = "Ali";
person.age = 25;

```

✅ Method 3: Object Constructor Function
  ```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const user1 = new Person("Ali", 25);
console.log(user1.name); // Ali

```

✅ Method 4: Using Object.create()
  ```javascript
const proto = { greet() { console.log("Hello"); } };
const obj = Object.create(proto);
obj.name = "Ali";
obj.greet(); // Hello
```





✅ Accessing Object Values
=========================

### Dot Notation

```javascript
   console.log(user.name);   
   ```

### Bracket Notation
```javascript
  console.log(user["age"]);   
  ```

Use bracket when key is dynamic.

✅ Updating Values
=================

```javascript
   user.age = 26;   
   ```



✅ Adding New Property
=====================

```javascript
  user.city = "Lahore";   
  ```

✅ Deleting Property
===================
```javascript
delete user.isLoggedIn;  
```

✅ Objects Can Store ANY Type
============================

```javascript
  let person = {    name: "Ali",
      age: 21,
      skills: ["JS", "Node"],
      address: {      city: "Karachi", zip: 74000    }  };

  ```

Objects can contain:

✔ Arrays

✔ Functions

✔ Other Objects




✅ Object Methods (Functions Inside Object)
==========================================
```javascript
  let user = {    
    name: "Ali",    
    greet: function () {      
      console.log("Hello " + this.name);    
      }
    };
  user.greet();   

  ```

this refers to the object itself.

✅ What is this in Object?
=========================

this means:

👉 “Current object”

```javascript  
 let car = {    brand: "Toyota", 
    show: function () {      console.log(this.brand);    }  };   

```

🔹 Common Object Methods
| Method                | Description                                 |
| --------------------- | ------------------------------------------- |
| `Object.keys(obj)`    | Returns an array of keys                    |
| `Object.values(obj)`  | Returns an array of values                  |
| `Object.entries(obj)` | Returns an array of \[key, value] pairs     |
| `Object.assign()`     | Copies values from one object to another    |
| `Object.freeze()`     | Makes object immutable                      |
| `Object.seal()`       | Prevent adding/removing props, allow update |




✅ Looping Through Object
========================

Use for...in

```javascript
  for (let key in user) { 
       console.log(key, user[key]);  
       }   
  ```

✅ Object vs Array Difference
============================

| Feature  | Object    | Array        |
| -------- | --------- | ------------ |
| Stores   | Key-value | Indexed list |
| Use Case | Entity    | Collection   |
| Access   | name      | index        |


✅ Object Creation Methods (Important)
=====================================

1️⃣ Literal Method (Most Used)
------------------------------

```javascript
   let obj = {};   
   ```

2️⃣ Using new Object()
----------------------

```javascript
  let obj = new Object();
  obj.name = "Ali";   
  ```

3️⃣ Constructor Function (Reusable Blueprint)
---------------------------------------------
```javascript
  function User(name, age) {
        this.name = name;
        this.age = age;  }

        let u1 = new User("Ali", 22);
        let u2 = new User("Sara", 23);   
  ```

Used for creating multiple objects.

✅ Object Destructuring (Modern JS)
==================================

Extract values easily:
```javascript

  let user = { name: "Ali", age: 22 };
  let { name, age } = user;
  console.log(name);   

   ```

✅ Spread Operator in Objects
============================

Copy or merge objects:

```javascript
  let a = { x: 1 };
  let b = { y: 2 }; 
  let c = { ...a, ...b };   
   ```

✅ Object.keys(), values(), entries()
====================================

```javascript
Object.keys(user);    // ["name", "age"]
Object.values(user);  // ["Ali", 22]
Object.entries(user); // [["name","Ali"],["age",22]]
  ```

Useful for loops & APIs.



🔹 Object.freeze(obj)
====================================

📘 Definition:
---------------------------------------------
Prevents adding, deleting, or modifying properties.
It makes the object completely immutable.

🧪 Example:
  ```javascript
const user = { name: "Ali" };
Object.freeze(user);

user.name = "Zain"; // won't change
user.age = 30;      // won't be added

console.log(user);  // { name: "Ali" }

```
🧠 Use Case: When you want to make sure that object values do not get changed anywhere else in your code.

🔹 Object.seal(obj)
====================================
📘 Definition:
---------------------------------------------
Prevents adding or removing properties, but allows modifying existing ones.
🧪 Example:
  ```javascript
const user = { name: "Ali" };
Object.seal(user);

user.name = "Zain"; // ✅ Allowed
user.age = 30;      // ❌ Not added
delete user.name;   // ❌ Not deleted

console.log(user);  // { name: "Zain" }
```
🧠 Use Case: You want to protect object structure, but still want to update the existing values.

✅ Shallow Copy vs Deep Copy
===========================

### Shallow Copy (reference problem ⚠️)

```javascript
  let a = { name: "Ali" };
  let b = a; 
  b.name = "Ahmed";
  console.log(a.name); // changed!   
  ```

Both point to same memory.

### Safe Copy

```javascript
   let b = { ...a };  

   ```

✅ Nested Objects (Very Common in APIs)
======================================

```javascript
  let order = {
  id: 1,
  customer: {
    name: "Ali",
    city: "Lahore"
  }
};

console.log(order.customer.name);

   ```

✅ JSON vs Object (Important)
============================

Object (JS runtime structure)JSON (data format for APIs)

Convert:
```javascript
JSON.stringify(obj); // object → JSON
JSON.parse(json);    // JSON → object 
   ```

Used in backend/frontend communication.


✅ Add Shared Methods Using Prototype
====================================

```javascript
function User(name) { 
     this.name = name;
       } 
User.prototype.sayHi = function () {
      console.log("Hi " + this.name);
        };   

 ```

Efficient memory usage.

✅ Object.freeze()
=================

Prevent changes:
```javascript
   Object.freeze(user);   
   ```


✅ Object.seal()
===============

Allow update but not add/remove.

🎯 Where Objects Are Used in Real Projects?
===========================================

Objects power everything:

✔ API responses

✔ Database records

✔ User models

✔ Configurations

✔ DOM manipulation

✔ State management

✔ Backend request/response

✅ One-Line Summary
==================

👉 Objects are used to **model real-world data in structured form**.







1️⃣ Shallow Copy → Copies only the first level
====================================

)

🔹 1. What is Shallow Copy?

A Shallow Copy creates a new object,
but nested objects are still shared (same reference).

Example
  ```javascript

const user = {
  name: "Ali",
  address: {
    city: "Lahore"
  }
};

// shallow copy
const copyUser = { ...user };

copyUser.name = "Ahmed";            // changes only copy
copyUser.address.city = "Karachi";  // changes BOTH!

Output
console.log(user.address.city); 
// Karachi ❗ original object changed


```









2️⃣ Deep Copy → Copies everything (including nested data)
====================================


🔹 2. What is Deep Copy?

A Deep Copy creates a completely independent clone.

No shared references.
Everything is duplicated.

Example
  ```javascript
const user = {
  name: "Ali",
  address: {
    city: "Lahore"
  }
};

// deep copy
const deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.address.city = "Karachi";

Output
console.log(user.address.city);
// Lahore ✅ original safe

```





✅ Why Deep Copy is Important?
====================================

Used when you must avoid accidental mutation:

React state updates

API data manipulation

Undo/Redo systems

Data history tracking

Redux / immutability

Backend validation layers