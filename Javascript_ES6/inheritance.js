console.log("class inheritance");
// to use class inheritance , we use the extends keyword

class Person {
    constructor (name) {
        this.name = name;
    }

    greet() {
        console.log(`hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}
let student1 = new Student('mike');
student1.greet();
