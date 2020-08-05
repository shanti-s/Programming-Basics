// Mathematical Expressions: +, -, *, /, modulo- %, exponentiation- **

console.log(1 +1); // 2
console.log("1 + 100"); // 1 + 100

// modulo: % returns the remainder
console.log(10 % 3); // 1
console.log(500 % 2); // 0

// Operand: is what operators are applied to
// 5*2 : there are two operands here 5 and 2. Operands are also called as arguments.
let varOne = 8; // if only one operand is involved it is called as uniary
console.log(varOne); // 8
// reassignment of varOne
varOne = -varOne;
console.log(varOne); // -8

let varTwo = 5;
let varThree = 8;
console.log(varTwo + varThree); // 13 -->if two operands are involved it is called as binary.
/* In the above example operator : +
                        operands : 5 and 8
                        operation: binary
*/

// exponentiation- **
console.log(2 ** 2); // 4 ( 2 multiplied by itself 2 times or 2 to the power of 2)
console.log(2 ** 3); // 8 ( 2 multiplied by itself 3 times or 2 to the power of 3)

// String concatenation with binary
let strOne = "Hello";
let strTwo = "World";
console.log(strOne + "" + strTwo); // Hello World
console.log("2" + 1); // 21 --> If first operand is string than javascript will convert the other operand also into string.
console.log(1 + "2"); // 12
console.log(2 + 2 + "1"); // 41 --> 2+2=4 and then 1 is treated as string so 41
console.log("2" + 2 + 1); // 221 --> 2 is string so it automatically changes other two operands also into strings so 221.
console.log("2" + (2+1)); // 23 --> This will be solved according to BODMAS.

/* -------  */
// Declaration
let myVar = 2;
myVar = myVar + 5;
console.log("myVar is " + myVar);
myVar = myVar * 2;
console.log("myVar is " + myVar);

/* The above notation can be written in short as below: */
// Reassignment
myVar += 5;
console.log("myVar is " + myVar);
myVar *= 2;
console.log("myVar is " + myVar);


let myVar2 = 2;
myVar2 *= 3 + 5;
console.log(myVar2); /* 16 --> This is not according to BODMAS. It is according to language. First right hand side is evaluated first than left hand side will be done
                        so first 3+5=8 and than 8*2=16 */

// incerement(++) and decrement(--) --> can only be applied to variables. postfixform and prefixform both are valid
let counter = 2;
counter++; // postfixform
console.log("counter is " + counter); // counter is 3

let counter2 = 2;
counter2--;
console.log("counter2 is " + counter2); // counter2 is 1

//console.log(5++);// Error --> Increment an Decrement operators can only be applied to variables not numbers.
let counter3 = 2;
++counter3; // prefixform
console.log("counter3 is " + counter3); // counter3 is 3
