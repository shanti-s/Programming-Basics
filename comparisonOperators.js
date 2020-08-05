// Boolean Expressions (or) Comparison Operators- there are 6
/* 1. <
   2. <=
   3. >
   4. >=
   5. == , ===
   6. != , !== (! stands for NOT)
*/   
// They are called boolean expressions because they always return values in true or false
console.log(1 < 2); // true
console.log(2 <= 2); // true

console.log(1 > 2); // false
console.log(3 >= 3); // true

console.log("1" > 2); // false -->loop hole in Javascript, the compiler removed the quotes it treated "1" as a number and returned the value

/* only = will not work we should use == (loose comparison) or === (strict comparison)*/
console.log(1 == 1); // true
console.log(1 === 1); // true
console.log(1 == "1"); // true --> loose comparison
console.log(1 === "1"); // false --> compiler didnot turn string into a number

console.log(1 != "1"); // false --> loose comparison
console.log(1 !== "1"); // true --> strict comparison
/* We should always use strict comparison operators */

// String Comparison

/* Comparing 2 strings */
console.log("Z" > "A"); /* true --> Every character on the keyboard has a order it can be called
                        as "dictionary" or "lexicographical" order. unicode: internal encoding table
                        JavaScript uses */

console.log("A" > "Z"); // false
console.log("Blue" > "Blur"); // false --> because it will compare indexes of the 2 strings starting from zero.
console.log("Bluee" > "Blue"); // true
console.log("a" > "A"); //true


