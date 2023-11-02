console.log("recursion - function calling itself");
/*program to count numbers to 1*/
function countDown(number)
{
    console.log(number);
    const newNumber = number - 1;
    if (newNumber > 0)//base condition
    {
        countDown(newNumber);
    }
}
countDown(4);

console.log("find factorial of a number");
/*program to find factorial of a number*/
function factorial(x)
{
    if (x == 0)//base condition
    {
        return 1;
    }
    else
    {
        return x * factorial(x - 1);
    }
}
const num = 10;
if (num > 0)
{
    let result = factorial(num);
    console.log(`factorial of ${num} is ${result}`);
}