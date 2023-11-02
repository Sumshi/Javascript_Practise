// parent class
class Person {
    constructor (name) {
        this.name = name;
        this.occupation = "employed";
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
// inheriting parent class
class Student extends Person {
    constructor (name) {
    // call the super class constructor and pass in the name parameter
        super(name);

        // overriding an occupational property
        this.occupation = 'student';
    }

    // overriding person's method
    greet() {
        console.log(`Hello student ${this.name}`);
        console.log('occupatiobn: ' + this.occupation);
    }
}

let p = new Student('jack');
p.greet();