function greet()/*function declaration*/
{
    console.log("hello there welcome to javascript");
}
greet()/*calling the function*/

console.log("function that adds two numbers");
function add(m, k)
{
    console.log(m + k);
}
add(3, 5);
add(10,23);

console.log("compare function compares two values")
let a = 10;
let b = 20;
function compare(a, b)
{
    if (a > b){
        return -1;
    }
    else if (a < b){
        return 1;
    }
    else{
        return 0;
    }
}
console.log(compare(12, 2));
console.log(compare(2, 10));
console.log(compare(12, 12));

console.log("arguments, arguments[0] returns first element");
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15
console.log(add(11, 23, 32, 44, 560));