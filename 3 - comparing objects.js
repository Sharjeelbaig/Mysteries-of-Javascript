/*
In javascript, you can't compare objects directly.
If you try to compare two objects, JavaScript will compare the references,
not the objects themselves. but with the help of JSON.stringify(), you can compare
two objects.
*/

let obj1 = { name: "Sharjeel", cast: "Baig" };
let obj2 = { name: "Sharjeel", cast: "Baig" };

console.log("obj1 == obj2: ", obj1 == obj2); // false
console.log("obj1 === obj2: ", obj1 === obj2); // false

console.log(
  "JSON.stringify(obj1) == JSON.stringify(obj2): ",
  JSON.stringify(obj1) == JSON.stringify(obj2)
); // true

/* 
In the above example, we have two objects obj1 and obj2.
when we compare obj1 and obj2 using == or ===, it will return false
because JavaScript compares the references of objects, not the objects themselves.
but when we compare obj1 and obj2 using JSON.stringify(), it will return true
because JSON.stringify() converts the objects to strings and then compares them.
*/
