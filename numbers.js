const a = 4 - 'hello';
console.log(a); // NaN
console.log(typeof(a));/*typeof operator is used for NaN value, it gives a number output*/

/*The built-in function isNaN()
can be used to find if a value is a number.*/
const b = isNaN(9);
console.log(b); // false

const c = isNaN(4 - 'hello');
console.log(c); // true
console.log(typeof(c));

console.log("javascript infinity of -infinity");
/*when calculation is done that exceeds the largest (or smallest) possible number
Infinity (or -Infinity) is returned*/

const m = 2/0;
console.log(m);

const n = -2/0;
console.log(n);

console.log("javascript BigInt data type");
/*they are used for larger numbers
A BigInt number is created by appending n to the end of an integer*/

// BigInt value
const value = 900719925124740998n;

// Adding two big integers
const value1 = value + 1n;
console.log(value1); // returns "900719925124740999n"

console.log("javascript precision")
const x = 0.1 + 0.2;
console.log(x); // 0.30000000000000004 insead of 0.3
console.log(x.toFixed(2));//0.3
console.log(x.toFixed(4));//0.3000