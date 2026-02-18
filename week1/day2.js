
//   let user = {    name: "Ahmed",    age: 25,    isLoggedIn: true  };  

// //   console.log('user obj', user); 
// //   console.log('user obj ==', user.name); 
// //   console.log(user["age"]);   
// //   user.age++
// //   console.log('user obj', user); 
// //   user.city = "Lahore";   

  
  
// // //   delete user;  
// //   console.log('user obj', user); 




//  let car = {    
//     brand: "Toyota", 
//     show: function () {
//               console.log(this); 
//     }  };   


// //  let car1 = {    
// //     brand: "Toyota", 
// //     inr : iner = {

// //         show: ()=> {
// //               console.log(this.bra); 
// //             }
// //     } 
// //     }  ;

// //    // with normal function 
// //     // console.log(car.show())

// //     // with arrow function 
// //     console.log(car1.inr)




// // let car1 = {    
// //     brand: "Toyota", 
// //     inr: {
// //         show: function () {
// //             console.log(car1.brand);  // ✅ Toyota
// //         }
// //     }
// // };

// // car1.inr.show();


// let car1 = {
//     brand: "Toyota",
//     showParent() {
//         function inner() {
//             console.log(this.brand);  // ✅ Toyota
//         };
//         inner();
//     }
// };

// car1.showParent();


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// delete person["age"];
// // delete person; // not work because delete key word only delete the propeties not the obj/varible
// console.log(person)
// // The delete keyword deletes both the value of the property and the property itself.
// // After deletion, the property cannot be used before it is added back again.


// var obj12 = {we:2}
// // delete obj12; // no effect with that becasue only delete the value of obj not delete the obj/varible 
// console.log(obj12)





// function User(name) {
//   this.name = name;
// }

// // shared method
// User.prototype.sayHi = function () {
//   console.log("Hi " + this.name);
// };

// // // create objects
// // const u1 = new User("Ali");
// // const u2 = new User("Sara");

// // call method
// // u1.sayHi();
// // u2.sayHi();






// // const user = {
// //   name: "Ali",
// //   address: {
// //     city: "Lahore"
// //   }
// // };

// // // shallow copy
// // const copyUser = { ...user };

// // copyUser.name = "Ahmed";            // changes only copy
// // copyUser.address.city = "Karachi";  // changes BOTH!


// // console.log(user.address.city); 
// // // Karachi ❗ original object changed





//   let obj = new Object(); 

//   console.log(obj);
//    obj.name = "Ali"; 
//    console.log(obj);




//      function User(name, age) {    
//         this.name = name;    this.age = age; 
//      }  

//  let u1 = new User("Ali", 22); 
// let u2 = new User("Sara", 23);   


//     console.log(u1)





    let user = { name1: "Ali", age: 22 };
     let { name1, age } = user;
       console.log(name1);   



   let a = { x: 1 , t : 2};
    let b = { y: 2 }; 
    let c = { ...a, ...b }; 
    console.log(c)



    /// freez 
    /// sale 