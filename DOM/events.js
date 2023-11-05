// event listeners
// element.addEventListner("event", function);


// adding events
const buttonTwo = document.querySelector('.btn-2');
function alertBtn() {
    alert(' i love working with js');
};
buttonTwo.addEventListener("click", alertBtn);

// mouse over event
const newColor = document.querySelector('btn-3');
function mouseHover() {
    newColor.style.backgroundColor = 'blue';
};
newColor.addEventListener('mouseover', mouseHover);