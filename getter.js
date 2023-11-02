/*get - used to define a getter method to get property value
it is used to access the properties of an object
N/B: to create a getter method, get keyword is used
 examples*/
const student = {
    firstName: 'moma',
    lastName: 'mikey',
    age: 12,

    //access the property(getter)
    get getName(){/*this is a getter method*/
        return this.firstName;
    },

    get getAge(){
        /*return student.age;*/
        return this.age;
    }
};
console.log(student.lastName);// accessing data property
console.log(student.getName);//accessing getter methods
console.log(student.getAge);
/*console.log(student.getName()); this will give error*/
