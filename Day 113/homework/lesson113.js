// Add a Class
const myDiv = document.createElement('div');
myDiv.id = 'myDiv';
document.body.appendChild(myDiv);
myDiv.classList.add('highlight');

// Remove a Class
myDiv.classList.remove('highlight');

// Toggle a Class
const toggleButton = document.createElement('button');
toggleButton.id = 'toggleButton';
toggleButton.textContent = 'Toggle';
document.body.appendChild(toggleButton);

const targetDiv = document.createElement('div');
targetDiv.id = 'targetDiv';
document.body.appendChild(targetDiv);

toggleButton.addEventListener('click', () => {
    targetDiv.classList.toggle('active');
});

// Check for a Class
const checkParagraph = document.createElement('p');
checkParagraph.id = 'checkParagraph';
checkParagraph.classList.add('important');
document.body.appendChild(checkParagraph);

console.log(checkParagraph.classList.contains('important'));

// Replace a Class
const replaceDiv = document.createElement('div');
replaceDiv.id = 'replaceDiv';
replaceDiv.classList.add('red');
document.body.appendChild(replaceDiv);

replaceDiv.classList.replace('red', 'blue');

// Item method
const itemDiv = document.createElement('div');
itemDiv.id = 'itemDiv';
itemDiv.className = 'class1 class2 class3';
document.body.appendChild(itemDiv);

console.log(itemDiv.classList.item(1));

// DOM Manipulation
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
li1.textContent = 'Item 1';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = 'Item 2';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = 'Item 3';
ul.appendChild(li3);

// Add a new li element
const newLi = document.createElement('li');
newLi.textContent = 'New Item';
ul.appendChild(newLi);

// Remove the first li element
ul.removeChild(ul.firstElementChild);

// Change the text content of a specific li element
ul.children[1].textContent = 'Updated Item';

// Change Element Text
const myParagraph = document.createElement('p');
myParagraph.id = 'myParagraph';
myParagraph.textContent = 'Placeholder text';
document.body.appendChild(myParagraph);

myParagraph.textContent = 'New text content!';

// Change Element Style
const styledDiv = document.createElement('div');
styledDiv.id = 'styledDiv';
document.body.appendChild(styledDiv);

styledDiv.style.backgroundColor = 'lightblue';
styledDiv.style.color = 'darkblue';

// Create and Append an Element
const myList = document.createElement('ul');
myList.id = 'myList';
document.body.appendChild(myList);

const newListItem = document.createElement('li');
newListItem.textContent = 'New list item';
myList.appendChild(newListItem);

// Remove an Element
const removableList = document.createElement('ul');
removableList.id = 'removableList';
document.body.appendChild(removableList);

const removableLi1 = document.createElement('li');
removableLi1.textContent = 'Item 1';
removableList.appendChild(removableLi1);

const removableLi2 = document.createElement('li');
removableLi2.textContent = 'Item 2';
removableList.appendChild(removableLi2);

const removableLi3 = document.createElement('li');
removableLi3.textContent = 'Item 3';
removableList.appendChild(removableLi3);

removableList.removeChild(removableList.children[1]);

// Modify Element Attributes
const myImage = document.createElement('img');
myImage.id = 'myImage';
myImage.src = 'placeholder.jpg';
document.body.appendChild(myImage);

myImage.src = 'new-image.jpg';
myImage.alt = 'Updated image';