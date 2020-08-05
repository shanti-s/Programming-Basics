// variables
var MyName = "Shanti";
console.log("Hello" + MyName);



// Mathematical expressions: Add- +, Sub- -, Mul- *, Div- /, modulo- %
console.log(1+1);
console.log(3-1);
console.log(4*2);
console.log(8/2);
// modulo: % --> It always returns the Remainder
console.log(10%3);
console.log(500%2);

// JS Variables
var myName = "John";
let myNum = 2888;

console.log(myName); //Output will be John
console.log(myNum);  //Output will be 2888   
console.log('myName'); //Output will be myName 
/* There are 3 ways to declare a variable:
 1. var
 2. let    ES6- ES2015
 3. const  ES6- ES2015 
*/ 
// var is an old way to declare, nowadays we are using let instead of var. It has nothing to do with data types

/* There are 3 ways to write variable identifiers
    1. camel case: customerName;
    2. snake case: customer_name;
    3.
*/
// var allows you to overwrite variable declaration without an error
var myName = "Dave";
console.log(myName); // Dave

var myName = "Mona";
console.log(myName); // Mona

var myName = "Lena";
console.log(myName); // Lena

// let only allows a variable to be declared once but we can overwrite the variable

let firstName = "kera";
console.log(firstName); // kera

firstName = "Gerry"
console.log(firstName); // Gerry

//let firstName = "Henna";
//console.log(firstName); // It gives error 


// const-no possibility of duplicating. variables can only be declared once

const lastName = "Lang";
console.log(lastName);

//const lastName = "Hello";
//console.log(lastName);



