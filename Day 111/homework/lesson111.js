// Create and Append Elements
const p = document.createElement('p');
p.textContent = "This is a paragraph.";
document.body.appendChild(p);

// Modify Existing Elements
const h2 = document.createElement('h2');
h2.textContent = "Subheading.";
document.body.appendChild(h2);
h2.textContent = "Updated Subheading.";

// Remove Elements
const div = document.createElement('div');
div.textContent = "This is a div.";
document.body.appendChild(div);
document.body.removeChild(div);

// Access Child Elements
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = "Item 1";
const li2 = document.createElement('li');
li2.textContent = "Item 2";
const li3 = document.createElement('li');
li3.textContent = "Item 3";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
document.body.appendChild(ul);

console.log(ul.firstElementChild); // Logs the first child element (Item 1)
console.log(ul.lastElementChild);  // Logs the last child element (Item 3)

// Insert Elements Before Existing Elements
const h3 = document.createElement('h3');
h3.textContent = "Inserted Heading.";
document.body.insertBefore(h3, document.body.firstChild);

// Access Parent Elements
const span = document.createElement('span');
span.textContent = "This is a span.";
const container = document.getElementById('container');
if (container) {
    container.appendChild(span);
    console.log(span.parentElement); // Logs the parent element of the span
}