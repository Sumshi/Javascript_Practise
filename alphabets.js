/*print alphabets from A -Z ascending order
65 = A
90 = Z*/
let i;
for (i = 65; i <= 90; i++)
{
    console.log(String.fromCharCode(i));
    // this converts the numeric value i to its
    //corresponding character in ASCII
}

let m;
for (m = 90; m >= 65; m--)
{
    console.log(String.fromCharCode(m));
    // this converts the numeric value i to its
    //corresponding character in ASCII
}

/*printing alphabets in lower case
a = 97
z = 122*/
let j;
for (j = 90; j <= 122; j++)
{
    console.log(String.fromCharCode(j));
}
