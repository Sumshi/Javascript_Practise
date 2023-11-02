/* syntax:
for (key in object) {
    // body of for...in
}
*/
console.log("iterating through an object");
const student = {
    name: 'monica',
    class: 7,
    age: 12
}

// using for ... in
for (let key in student) {
    // displaying 
    console.log(`${key} => ${student[key]}`);
}

const string = 'code';
// using for in loop
for (let i in string) {
    console.log(string[i]);
}