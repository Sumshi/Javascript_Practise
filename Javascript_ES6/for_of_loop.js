// array
const students = ['john', 'sara', 'jack'];

// using for ... of
for (let element of students) {
    // display the value
    console.log(element);
}

console.log("for of with strings");
// string
const string = 'code';

// using for...of loop
for (let i of string) {
    console.log(i);
}


console.log("for of  with sets");
// define Set
const set = new Set([1, 2, 3]);

// looping through Set
for (let i of set) {
    console.log(i);
}