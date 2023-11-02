/* A multidimensional array is an array that contains another array*/

// multidimensional array
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
console.log(data);

console.log("how to create a multidimensial array");
let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];
console.log(studentsData);
console.log(studentsData[0]);
console.log(studentsData[0][0]);
console.log(studentsData[2][1]);

console.log("adding an element to multidimensial array");
studentsData.push(['mayta', 90]);
console.log(studentsData);

console.log("adding an element using index notation");
// using index notation
let students = [['Jack', 24], ['Sara', 23],];
students[1][2] = 'hello';
console.log(students); // [["Jack", 24], ["Sara", 23, "hello"]]

console.log("iterating over array elements");
let studentData = [['Jack', 24], ['Sara', 23],];
for (let i of studentData) {
  for (let j of i) {
    console.log(j);
  }
}