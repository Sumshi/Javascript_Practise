/*break - a loop breaks when a certain condition is met*/

let i = 0;
for (i = 0; i <= 5; i++)
{
    if (i == 3)
    {
        break;
    }
    console.log(i);
}

console.log("this part is for continue");
/*continue will continue the loop and skips a certain condition*/
let j = 0;
for (j = 0; j <= 5; j++)
{
    if (j == 3)
    {
        continue;
    }
    console.log(j);
}