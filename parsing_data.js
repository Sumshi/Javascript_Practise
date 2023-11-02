/* u can generate numbers from strings using parseInt(),
parseFloat(), unary operator, and math.floor()*/

let result;
result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01

result = +'20.01';
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(result); // 20

/*to convert other data types to strings, u can use
string() or tostring()*/

//number to string
let result1;
result1 = String(324);
console.log(result1);  // "324"

result1 = String(2 + 4);
console.log(result1); // "6"

//other data types to string
result1 = String(null);
console.log(result1); // "null"

result1 = String(undefined);
console.log(result1); // "undefined"

result1 = String(NaN);
console.log(result1); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result1 = (324).toString();
console.log(result1); // "324"

result1 = true.toString();
console.log(result1); // "true"