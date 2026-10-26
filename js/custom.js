// Toggle Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Slider
let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;
const totalSlides = document.querySelectorAll('.slide').length;

function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}
