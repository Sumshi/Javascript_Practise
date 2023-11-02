/*how to access string characters
1) by treating the string as an array
2) by using the method charAt()*/

console.log("access string characters using array")
const a = 'hello';
console.log(a[1]);// e

console.log("using the method charAt()");
const b = "welcome";
console.log(b.charAt(3));//c

console.log("strings are immutable")
let n = 'hello';
n[0] = 'H';
console.log(n);

/*assign it to a new variable*/
let m = 'hello';
m = 'Hello';
console.log(m);

console.log("finding the length of a string");
const c = 'hello';
console.log(a.length);//5

console.log("string methods");
const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"

/*string() function is used to convert various datatypes into strings*/
const am = 225; // number
const bm = true; // boolean

//converting to string
const resul1 = String(am);
const resul2 = String(bm);

console.log(resul1); // "225"
console.log(resul2); // "true"

console.log("escape characters")
const name = 'My name is \'Peter\'.';
console.log(name);