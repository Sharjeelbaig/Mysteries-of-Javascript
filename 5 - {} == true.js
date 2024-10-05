/*
{} == true
Javascript does not perform type coercion on objects.
it will only return true if both the value and the type are the same.
!Note  Type coercion is the automatic or implicit conversion of values
from one data type to another (such as strings to numbers).
*/

console.log("{} == true: ", {} == true); // false
console.log("{} == false: ", {} == false); // false

/*
In the above example, we have an empty object {} and a boolean value true.
When we compare {} and true using == or ===, it will return false because
JavaScript does not perform type coercion on objects. it will only return true
if both the value and the type are the same.
*/
