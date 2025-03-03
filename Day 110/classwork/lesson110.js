// Get the elements by their respective methods
const firstElement = document.getElementById('firstElement');
const secondElement = document.getElementsByClassName('secondElement')[0];
const thirdElement = document.getElementsByTagName('div')[2];

// Change styles for the elements
firstElement.style.color = 'red';
firstElement.style.backgroundColor = 'yellow';
firstElement.style.fontSize = '20px';
firstElement.style.fontStyle = 'italic';

secondElement.style.color = 'blue';
secondElement.style.backgroundColor = 'lightgreen';
secondElement.style.fontSize = '18px';
secondElement.style.fontStyle = 'bold';

thirdElement.style.color = 'purple';
thirdElement.style.backgroundColor = 'lightblue';
thirdElement.style.fontSize = '16px';
thirdElement.style.fontStyle = 'underline';

// Change the content of the elements
firstElement.textContent = 'Updated First Element';
secondElement.textContent = 'Updated Second Element';
thirdElement.textContent = 'Updated Third Element';