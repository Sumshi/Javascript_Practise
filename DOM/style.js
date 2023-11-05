// syling elements using javascript

// styles a single line
const title1 = document.querySelector('#main-heading');
title1.style.color = 'red';
console.log(title1);

// styling multiple elemets
const items = document.querySelectorAll('.list-items');
for (i = 0; i < items.length; i++) {
    items[i].style.color = 'green';
    items[i].style.fontSize = '2rem';
}
console.log(items);

// creating elements
const ul = document.querySelector('ul');
const li = document.querySelector('li');
// adding elements
const firstListItems = document.querySelector('.list-items');
// console.log(firstListItems.innerText);
// console.log(firstListItems.textContent);
// console.log(firstListItems.innerHTML);// shows tags
ul.append(li);
li.innerText = 'x-peeeps';

// modifying attributes and classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const b1 = document.querySelector('#main-heading');
console.log(b1.getAttribute('id'));

// modifying classes
li.classList.add('list-items');
//li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));

