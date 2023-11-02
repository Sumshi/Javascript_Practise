console.log("global variable scope");
let a = "hello";
function greet()
{
    console.log(a)
}
greet();
 
/*console.log("local variable scope");
let m = "hello";
function greet()
{
    let n = "world";
    console.log(a + b);
}
greet();
console.log(a + b); // error*/

console.log("add two nums using local scope");
function addNumbers(n1, n2)
{
    let result = n1 + n2;/*local scope*/
    console.log(result);
}
addNumbers(12, 12)

console.log("add two nums using global scope");
let res;
function addNums(n3, n4)
{
    res = (n3 + n4);
    console.log(res);
}
addNums(4, 9);
console.log(res);
