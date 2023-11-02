/*javascript object declaration:
const object_name = {
   key1: value1,
   key2: value2
}

const student = {
    firstName: 'maya',
    class: 10
};
*/

// object creation
const person = { 
    name: 'John',
    age: 20
};
console.log(typeof (person)); // object
console.log(person)
console.log("Accessing object properties")
console.log(person.name);
console.log(person.age);
console.log(person["name"]); // John


console.log("javascript nested objects");
// nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}

// accessing property of marks object
console.log(student.marks.science); // 70


const man = {
    fname: 'mikey',
    lname: 'john',
    greet: function(){
        console.log("Hello");
    }
}
man.greet();
