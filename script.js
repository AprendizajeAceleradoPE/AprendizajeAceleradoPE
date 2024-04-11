let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const intervalTime = 5000; // Cambia esto para ajustar la velocidad del carrusel (en milisegundos)

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function autoSlide() {
    nextSlide();
}

// Muestra la primera imagen al cargar la página
showSlide(currentSlide);

// Configura el movimiento automático del carrusel
setInterval(autoSlide, intervalTime);