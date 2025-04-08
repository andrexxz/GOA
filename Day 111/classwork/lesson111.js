document.getElementById('button1').addEventListener('click', function() {
    displayImage('image1.jpg');
});

document.getElementById('button2').addEventListener('click', function() {
    displayImage('image2.jpg');
});

document.getElementById('button3').addEventListener('click', function() {
    displayImage('image3.jpg');
});

function displayImage(imageSrc) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img src="${imageSrc}" alt="Image">`;
}