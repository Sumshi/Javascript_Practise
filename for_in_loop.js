/*for in loop allows one to iterates over all 
property keys of an object
syntax: for (key in object){}*/

console.log("iterate through an object");
const student = {
    name: 'monica',
    class: '4',
    age: '12'
}
// using for ...in
for ( let key in student){
    //display properties
    console.log(`${key} -> ${student[key]}`);
}

/*update values of properties*/
console.log("update values of properties");
const salaries = {
    jack: 24000,
    paul: 23440,
    monica: 12345
}

for (let i in salaries){
    let salary = "$" + salaries[i];// add $ symbol
    console.log(`${i}: ${salary}`);
}

console.log("for in with strings")
const string = 'sumaya';
for (let i in string){
    console.log(string[i]);
}

console.log("for in with arrays");
const arr = ['hello', 123, 'welcome'];
for (let x in arr){
    console.log(arr[x]);
}