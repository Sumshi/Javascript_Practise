let result;

// string to number
result = Number('324');
console.log(result); // 324

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

/*if a string is an invalid number, result will be NaN*/
let result2;
result2 = Number('hello');
console.log(result2); // NaN

result2 = Number(undefined);
console.log(result2); // NaN

result2 = Number(NaN);
console.log(result2); // NaN