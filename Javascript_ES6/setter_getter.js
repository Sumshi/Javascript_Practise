/* getter methods get the value of an object
setter method sets the value of an object*/

class Person {
    constructor (name) {
        this.name = name;
    }

    // getter
    get personName() {
        return this.name;
    }

    // setter
    set personName(x) {
        this.name = x;
    }
}
let person1 = new Person('jack');
console.log(person1.name);// jack

// change the values of name property
person1.personName = 'sarah';
console.log(person1.name);// sarah