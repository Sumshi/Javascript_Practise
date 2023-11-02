/*changing prototype*/

// constructor function
function Person(){
    this.name = 'johnki'
}

// add a property
Person.prototype.age = 34;

// creating an object
const person1 = new Person();

console.log(person1.age);//34

// changing the property value of prototype
Person.prototype = {age: 50}

// creating new object
const person3 = new Person();

console.log(person3.age);//50
console.log(person1.age);//34

console.log("accessing prototype propert from an object")
function Man () {
    this.name = 'John'
}

// adding a prototype
Man.prototype.age = 24;

// creating object
const person = new Man();

// accessing prototype property
console.log(person.__proto__);   // { age: 24 }