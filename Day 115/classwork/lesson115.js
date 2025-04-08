document.body.innerHTML = `
    <div class="slider-container">
        <button id="prevBtn" class="slider-btn">❮</button>
        <div class="slider">
            <img src="https://via.placeholder.com/600x300?text=Image+1" class="slide active" alt="Image 1">
            <img src="https://via.placeholder.com/600x300?text=Image+2" class="slide" alt="Image 2">
            <img src="https://via.placeholder.com/600x300?text=Image+3" class="slide" alt="Image 3">
        </div>
        <button id="nextBtn" class="slider-btn">❯</button>
    </div>
`;

const style = document.createElement('style');
style.textContent = `
    .slider-container {
        position: relative;
        width: 600px;
        margin: auto;
        overflow: hidden;
    }
    .slider {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }
    .slide {
        min-width: 100%;
        display: none;
    }
    .slide.active {
        display: block;
    }
    .slider-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        z-index: 10;
    }
    #prevBtn {
        left: 10px;
    }
    #nextBtn {
        right: 10px;
    }
`;
document.head.appendChild(style);

// JavaScript for functionality
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

showSlide(currentIndex);