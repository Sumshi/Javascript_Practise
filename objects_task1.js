/*create an object name student with keys:
name, rollNo, totalMarks
create functions to print information about student
and a function to check if student passed the exam or not
if totalMarks < 40 print u failed, if > 40 print u passed*/

const student = {
    name: 'sumaya',
    rollNo: 1234,
    totalMarks: 380,
    studentInfo: function(){
        console.log(student);
        console.log(student.name);
    },
    checkMarks: function(){
        if (this.totalMarks < 40){
            console.log("you failed");
        }
        else
        {
            console.log("You passed");
        }
    }
}
student.studentInfo();
student.checkMarks();

console.log("alternative way for above both are correct");
const student1 = {
    name: 'Jack',
    rollNo: 12,
    total_marks : 30
}

function studentInfo() {
    console.log(student1);
    console.log(student1.name);
    console.log(student1.rollNo);
    console.log(student1.total_marks);
}

function checkResult() {
    if (student1.total_marks < 40) {
        console.log('You failed.')
    } else {
        console.log('You passed.')
    }
}

studentInfo();
checkResult();