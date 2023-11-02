 /*prompt displays a dialog box where users can input numbers*/
 var userInput = prompt("enter a number: ");

 /*convert or parse the string intp int*/
 var num = parseInt(userInput);
     if (num % 2 == 0)
     {
         console.log("The number is even");
     }
     else
     {
         console.log("The number is odd");
     }