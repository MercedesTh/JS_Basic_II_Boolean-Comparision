// Aufgabe 1 Lev1_14 //

console.log(Boolean(100)); //true
console.log(Boolean(3.14)); // true
console.log(Boolean("hello")); // true 
console.log(Boolean("false")); // true
console.log(Boolean(1 + 7 + 3.14)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(false)); // false



// Aufgabe 2 Lev1_15 //

let num = 5;
let anotherNum = 8;

console.log(num == anotherNum); // false
console.log(num > anotherNum); // false
console.log(num < anotherNum); // true
console.log(num >= anotherNum); // false
console.log(num <= anotherNum); // true


console.log(num == "5"); // true
console.log(num != 8); // true
console.log(num != "5"); // false
