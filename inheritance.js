// constructor function
function Person (){
    this.name = 'sumaya',
    this.age = '20'
}
//creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'female';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);


/*N/B - syntax for adding property to an object is:
objectConstructorName.prototype.key = 'value';
*/

console.log("adding a method to constructor function");

// constructor function
function Student (){
    this.name = 'malik',
    this.age = 24
}

// creating objects
const student1 = new Student();
const student2 = new Student();

// adding a method to the constructor function
Student.prototype.greet = function (){
    console.log("Hello" + ' ' + this.name);
}
student1.greet();
student2.greet();