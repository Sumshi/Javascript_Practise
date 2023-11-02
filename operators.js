var num = 100;
num += 1;
console.log("num = ", num)

num1 = 123;
num1 = num1 + 1;
console.log("num1 = ", num1);

num2 = 24;
num2++;
console.log("num2 = ", num2);

num3 = 18
--num3;
console.log("num3 = ", num3);

const a = 20;
const b = 50;
console.log(b > a);

/*concatenation*/
console.log("hello" + ' ' +  "world");

/*data conversion*/
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"

// non-numeric string used with - , / , * results to NaN

let result1;

result1 = 'hello' - 'world';
console.log(result1); // NaN

result1 = '4' - 'hello';
console.log(result1); // NaN