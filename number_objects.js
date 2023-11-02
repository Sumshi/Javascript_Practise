/*u can create numbers using the new keyword*/
const a = 45;

// creating a number object
const b = new Number(30);
console.log(a);
console.log(b);

console.log(typeof a); // "number"
console.log(typeof b); // "object"


console.log("number methods examples");
// check if a is integer
const c = 12;
console.log(Number.isInteger(c)); // true

// check if b is NaN
const d = NaN;
console.log(Number.isNaN(d)); // true

// display upto two decimal point
const e = 5.1234;
console.log(e.toFixed(2)); // 5.12

// largest possible value
const m = Number.MAX_VALUE;
console.log(a); // 1.7976931348623157e+308

// maximum safe integer
const n = Number.MAX_SAFE_INTEGER;
console.log(a); // 9007199254740991


/*Number() function is used to convert various data types to numbers*/
const y = '23'; // string
const z = true; // boolean
//converting to number
const result1 = Number(y);
const result2 = Number(z);
console.log(result1); // 23
console.log(result2); // 1