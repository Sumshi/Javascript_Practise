/* Dom Manipulation, ways of selecting an elements
- getElementById
- getElementsByClassName
- getElementByTagName
- querySelector()
- querySelectorAll()
*/
const title = document.getElementById('main-heading');
console.log(title);


// GetElementByClassName
const ListItems = document.getElementsByClassName('list-items');
console.log(ListItems);

// GetElementByTagName
const elements = document.getElementsByTagName('p');
console.log(elements);

// querySelector() - used to select a specific part or tags etc
const container = document.querySelector('div');
console.log(container);

// querySelectorAll() - selects all not only the first instance
const cont = document.querySelectorAll('div');
console.log(cont);
