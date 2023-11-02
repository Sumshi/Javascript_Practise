// keyword class is used to create a class
console.log("example1");
class Person {
    constructor (name) {
        this.name = name;
    }
}
const person1 = new Person('jake');
const person2 = new Person('sumaya');
console.log(person1.name);
console.log(person2.name);
console.log(person2);

// class methods
console.log("javascript class methods");
console.log('example2');
class Student {
    constructor (age) {
        this.age = age;
    }

    greet () {
        console.log('hello you are ' + this.age + ' years old');
    }
}
let student1 = new Student(23);
console.log(student1.age);
student1.greet();