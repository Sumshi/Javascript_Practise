let multiply = function(x, y) {
    return x * y;
}

// Using the function to multiply two numbers
let result = multiply(5, 3); // This will return 15

console.log(result); // Output will be 15

console.log("using arrow function");
let mult = (x, y) => x * y;
// Using the arrow function to multiply two numbers
let res = mult(5, 3); // This will return 15

console.log(res); // Output will be 15

console.log("arrow function with one argument");
let greet = y => console.log(y);
greet('hello');