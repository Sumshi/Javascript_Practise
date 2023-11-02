/*calculating body mass index*/

let weight = 70;//kg
let height = 1.72;// meter

let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5)
{
    weightStatus = 'underweight';
}
else if (bmi >= 18.5 && bmi <= 24.9)
{
    weightStatus = 'health status';
}
else if (bmi >= 25 && bmi <= 29.9)
{
    weightStatus = 'Overweight';
}
else
{
    weightStatus = 'obesity';
}
console.log(weightStatus);