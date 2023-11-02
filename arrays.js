// how to access elements of an array
const myArray = ['h', 'e', 'l', 'l', 'o'];
console.log(myArray[0]);// h
console.log(myArray[4]);

/*to add elements to an array use push()method
push adds elements to the end of the array*/
console.log("adding an element to an array using push()");
let students = ['maya', 'kate', 'john'];
students.push('Ahmed');
console.log(students);

/*unshift() adds elements at the beginning of array*/
console.log("adding an element to an array using unshift()");
let girls = ['maya', 'kate', 'mercy'];
girls.unshift('maryam');
console.log(girls);

console.log("changing elements via index");
let dailyActivities = [ 'eat', 'sleep'];
dailyActivities[2] = 'exercise';
dailyActivities[0] = 'cook'
console.log(dailyActivities); // ['eat', 'sleep', 'exercise']

/*removing the last element from an array uses pop()
pop() also returns the removed value*/

console.log("removing element fromarray using pop()");
let Activities = ['work', 'eat', 'sleep', 'exercise'];
// remove the last element
Activities.pop();
console.log(Activities); // ['work', 'eat', 'sleep']
// remove the last element from ['work', 'eat', 'sleep']
const removedElement = Activities.pop();
//get removed element
console.log(removedElement); // 'sleep'
console.log(Activities);  // ['work', 'eat']

/*to remove the first element uses the shift()
it removes and returns the first element*/
console.log("remove the first element using shift()");
let men = ['mike', 'jake', 'andrew', 'kyle'];
console.log(men.length)
men.shift();
console.log(men);


/*to find the array length use length property*/
console.log("finding array length using length property");
let rooms = ['r1', 'r2', 'r3', 'r4'];
console.log("no of rooms are:", rooms.length)