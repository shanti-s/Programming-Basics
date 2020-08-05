/*STRINGS*/
let myString = "It is a beautiful day!";
console.log(myString); // It is a beautiful day!
// To log index 0
// bracket notation []
console.log(myString[0]); // I
// To log index 1
console.log(myString[1]); // t
// To log index 2
console.log(myString[2]); // space
/* Each element in the string occupies a position*/

//To findout the length of the string
// Dot notation--> when we use dot like below example
console.log(myString.length); //22-->all the spaces are also counted

// create another string
let str1 = "25";
// To log index 1
console.log(str1[1]); // 5
/* END OF STRINGS */

//NUMBERS
/* 1. Integer
   2. Float
   3. + Infinity
   4. - Infinity
   5. NaN -"Not a Number"
*/
console.log(myString - 2); /*Subtracting a string with 2--> in output you will get Nan
                            which is not a number */
console.log(str1 - 2); // 23--> this is a loop hole in javascript, it automatically takes it as a number.

let myNum = 50;
console.log(50 * Infinity); // Infinity --> Any number multiplied with infinity gives infinity
console.log(50 / Infinity); // 0 --> Any number divided with infinity gives zero
/*END OF NUMBERS*/

//Boolean --> can only be true or false, Quotes are not used.
let booleanOne = true;
let booleanTwo = false;
let undefinedVariable;

console.log(Boolean(booleanOne)); // true
console.log(Boolean(booleanTwo)); // false
console.log(Boolean(myNum)); // true
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(" ")); // true--> Empty space is counted
console.log(Boolean("")); // false
console.log(Boolean(undefinedVariable)); //false--> undefinedVariable is undefined
console.log(Boolean(false)); // false
console.log(Boolean("false")); //true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
   
//let myNum = 50; //Integer
//let numTwo = 2.22 // float

// Undefined
/*const undefinedval;// we get an error because when we use const it should be intialised with some value*/

let undefinedVal;
console.log(undefinedVal); // undefined --> value is not assigned.
undefinedVal = booleanOne; // This is only possible when we use let, it is not possible if we have used const because we cannot chane the value in const
console.log(undefinedVal); // true

let profilePic;
let myPicture = "My Picture";

console.log(profilePic); // undefined or value is not assigned

profilePic = myPicture;
console.log(profilePic); // profile picture from my pictures

// NULL: nothing, empty, unknown value

let age = null;
let emptyString = null;
console.log(emptyString);

// typeof operator --> to find out which data type it is, it is only for beginners not used in development
console.log(typeof age); // null is a object data type
console.log(typeof booleanOne); // boolean
console.log(typeof true); // boolean
console.log(typeof "true"); // string
console.log(typeof "1"); // string
console.log(typeof 1); // number
console.log(typeof undefined); // undefined
console.log(typeof undefinedVariable); //undefined
console.log(typeof myPicture); //string


/*END OF PRIMITIVE DATA TYPES*/

/* NON - PRIMITIVE DATA TYPES */
/* OBJECT DATA TYPE */
// Objects are collection of data; we can save multiple datatypes inside the same object; Objects are extremely powerful.
let person = {
   name: "Dave",
   age: 32,
   citizen:true,
   pets: ["dog1", "dog2"], /*Arrays are always stored in square brackets and comma seperated values. There is no keyvalue in array */
   address: {
      street: "abc",
      houseNo: 44,
      city: "Berlin",
   }
}
/* name: "Dave" --> is called property. Each property contains a key and a value.name, age, citizen are keys; dave, 32, true are values 
   name is a string; pets is an array; address is a object*/
console.log(person);

// Array Example
let myArray = [1, 2, 3, "Hello", "Bye"]
console.log(typeof myArray); //object
console.log("Array is " + myArray);



