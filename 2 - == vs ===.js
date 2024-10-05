/*
== vs ===
To be concise, == is used to compare values,
while === is used to compare both values and types.
*/

let a = 5;
let b = "5";

console.log("a == b: ", a == b); // true
console.log("a == b: ", a === b); // false

/*
To be more specific, We have a concept called type coercion in JavaScript.
Type coercion is the automatic or implicit conversion of values
from one data type to another (such as strings to numbers).
When comparing two values, JavaScript uses type coercion to
convert the values to the same type before comparing them.
For example, when comparing a string and a number using ==,
the string is converted to a number before the comparison.
while the other hand, === does not perform type coercion. it performs
a strict comparison, which means it will only return true if both the value
and the type are the same.
*/
