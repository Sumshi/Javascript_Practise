// creating an object dictionary
let Person = {
    name: 'John',
    age: '20',
    job: 'doctor'
};

// accessing values of dictionary
console.log(Person.name);
console.log(Person.age);
console.log(Person.job);

// modifying values of a dictionary
Person.age = 31;
Person.name = 'sumaya';

// adding a new key value pair
Person.city = 'kenya';

// deleting a key value pair
delete Person.job;

console.log(Person.name);