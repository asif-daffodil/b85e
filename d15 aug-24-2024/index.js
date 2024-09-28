// variable
// var studentName = "Abdulah Al Naiym  Araf";
// var studentName = "Abdulah Al Naiym  Arafa";
// studentName = "Abdulah Al Naiyma  Arafa";

let studentName = "Abdulah Al Naiym  Araf";
studentName = "Abdulah";

console.log(studentName);

const gender = "Male";
// gender = "female";

console.log(gender);

// Data Types

// Primitive Data Types
// 1. Number - 10, 10.5, 10.5e+10
// 2. String - "Hello", 'Hello'
// 3. Boolean - true, false
// 4. Undefined - undefined
// 5. Null - null
// 6. Symbol - Symbol()

// Non-Primitive Data Types
// 1. Object - {name: "Abdulah", age: 25}
// 2. Array - ["Abdulah", "Araf"]
// 3. Function - function() {}

// Number
let number = 10;
console.log(typeof number);

// String
let string = "Hello";
console.log(typeof string);

// Boolean
let boolean = true;
console.log(typeof boolean);

// Undefined
let undefinedValue;
console.log(typeof undefinedValue);

// Null
let nullValue = null;
console.log(typeof nullValue);

// Symbol
let symbolValue = Symbol();
console.log(typeof symbolValue);

// Object
let objectValue = {name: "Abdulah", age: 25};
console.log(typeof objectValue);

// Array
let arrayValue = ["Abdulah", "Araf"];
console.log(typeof arrayValue);

// Function
let functionValue = function() {};
console.log(typeof functionValue);

// Operators
/**
 * 1. Arithmetic Operators: +, -, *, /, %, ++, --
 * 2. Assignment Operators: =, +=, -=, *=, /=, %=
 * 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
 * 4. Logical Operators: &&, ||, !
 * 5. Bitwise Operators: &, |, ~, ^, <<, >>
 * 6. Ternary Operator: ?:
 * 7. Type Operators: typeof, instanceof
 */

// Arithmetic Operators
let a = 10;
let b = 20;
let c = a + b;
console.log(c);

// Assignment Operators
let d = 10;
d += 5; // d = d + 5
console.log(d);

// Comparison Operators & Logical Operators
let e = 10;
let f = "10";
console.log(e === f && e <= f);

// Ternary Operator
let g = 10;
let h = 20;
let i = g > h ? "Greater" : "Smaller";
console.log(i);

// Type function
function showName (fname, lname) {
    console.log(fname, lname);
}

showName("Araf", "Abdulah");
showName("Fabiha", "Fida");

// Array
let students = ["Araf", "Fabiha", "Fida"];
console.log(students[2]);
console.log(students.length);
students.push("aiman", "Ayesha");
students.pop();
students.shift();
students.unshift("Arafat");




