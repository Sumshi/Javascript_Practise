/*set - defines a setter method to set the property of a value
setter methods are used to change the values of an object
set keyword are used to creater setter methods*/

const student = {
    firstName: 'alibakr',
    lastName: 'juma',
    age: 89,

    // property setter
    set changeFName(newName){
        this.firstName = newName;
    },
    set changeLName(newName){
        this.lastName = newName;
    },
    set changeAge(newAge){
        this.age = newAge;
    }
};

console.log(student.firstName);
console.log(student.lastName);
console.log(student.age);

// using setter change the name property
student.changeFName = 'sarah';
console.log(student.firstName);
student.changeLName = 'MIKEY';
console.log(student.lastName);
student.changeAge = 23;
console.log(student.age);