// Check if the script was run with command-line arguments
if (process.argv.length !== 3)
{
    console.log("Usage: node if_statements.js <number>");
    process.exit(1);
}
const num = parseFloat(process.argv[2]);

if (num > 0)
{
    console.log("The number is positive");
}
else if (num === 0)
{
    console.log("The number is 0");
}
else
{
     console.log("The number is negative");
}
