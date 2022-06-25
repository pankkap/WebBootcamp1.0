// Variables
// JavaScript is Loosly Typed Language

var a = 10; // Global Scope
// a = "Panakj";

// JavaScript is also known as ECMAScript
// ECAM6 --> 2015

let b = 20; // Block Scope
const c = 100; // Constant variable Block Scope

//Data Types

var num = 10; // Number Datatype
var name = "Sachin"; // String Datatype
var isActive = true; // Boolean Datatype

// console.log(num);
// console.log(typeof num);
// console.log(typeof name);
// console.log(typeof isActive);

// Now we can execute code outside browser using Node

// Arithmatic Operator
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// Unary Operators
// console.log(a++);
// console.log(++a);

// console.log(a--);
// console.log(--a);
// console.log(!a);

// Relational Operators: results in True and False
// console.log(a<b);
// console.log(a>b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);

a = 10;
b = "10";
// console.log(a == b); // Compare value Only
// console.log(a === b); // Compare value and Datatype aswell

// Conditional Operator
// console.log(a < b ? "Hello" : "bye"); //bye

// Conditional Statements
// 1. if
// 2. if-else
// 3. if-else-elif
// 4. swtich

// if (a) {
//   console.log("if part");
// } else {
//   console.log("else part");
// }

// Loops in javaScript
// 1. while
// 2. do while
// 3. for

// Array in JavaScript

var myArr = [1, 2, 3, "sachin", "abc", true, false];

// myArr.push("xyz"); // insert at end
// myArr.unshift("JavaScript"); // insert in starting
// myArr.shift(); //delete from starting
// myArr.pop(); // delete from end
// console.log(myArr);

// for(let i=0;i<myArr.length;i++ )
// {
//     console.log(myArr[i]);
// }

// Iterater over the array
// myArr.forEach((element) => {
//   console.log(element);
// });

// XML: CLient <----- data Exchange ---->Server
// JSON: Comman way to transfer the data over internet

// JavaScript Object Notaion

var JSObject = {
  id: 123,
  name: "abc",
  age: 30,
  salary: 50000.0,
};

// console.log(JSObject);
// console.log(JSObject.name);

var data = [
  { name: "sachin", age: 30 },
  { name: "manish", age: 21 },
  { name: "Mohan", age: 20 },
  { name: "sonia", age: 32 },
  { name: "pardeep", age: 35 },
];

a = "pankaj";
b = "kumar";
// console.log(a + " " + b); // pankaj kumar
console.log(`Hello and Welcome ${a} ${b}`); // pankaj kumar

// Template String
// data.forEach((element) => {
//   console.log(`Name: ${element.name}  Age:  ${element.age}  `);
// });

// taking input from user
// var FirstName = prompt("Enter First Name");
// var LastName = prompt("Enter Last Name");
// console.log(FirstName + " " + LastName);

// JavaScript Function

function sum(x, y) {
  return x + y;
}

var result = sum(30, 15);
console.log(result);

// Ecma6 based Arrow Function

var sub = (x, y) => x - y;
console.log(sub(105, 20));

// JavaScript Dialog Boxes
// alert("Notification"); // Notification
// prompt("Input"); // Input
// confirm("Are your Sure"); // Yes or No
