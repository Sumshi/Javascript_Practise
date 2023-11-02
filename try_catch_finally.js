/*try, catch and finally blocks are used to handle exceptions*/

console.log("try...catch statements")
/*syntax: 
try {
    // body of try
} 
catch(error) {
    // body of catch  
}
*/

// program to show try...catch in a program

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);

    /*forgot to define variable a   
    a = numerator/denominator;   */
    console.log(a);
}
catch(error) {
    console.log('An error caught');
    console.log('Error message: ' + error);
}
/*a variable is not defined. When you try to print the a variable
the program throws an error. That error is caught in the catch block*/

console.log("try..catch..finally");
/*The finally block executes both when the code runs successfully
or if an error occurs.

syntax:
try {
    // try_statements
} 
catch(error) {
    // catch_statements  
}
finally() {
    // codes that gets executed anyway
}*/

const num= 100, denom = 'a';

try {
     console.log(num/denom);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}

/*in the above: 
an error occurs and that error is caught by the catch block.
the finally block will execute in any situation,
 if the program runs successfully or if an error occurs*/