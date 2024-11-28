document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner-slide');
    const intervalTime = 3000;
    let autoSlide;

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index); // Toggle 'active' class
        });
        currentSlide = index;
    }

    // Function to change the slide (with wrapping)
    function changeSlide(direction) {
        const newIndex = (currentSlide + direction + slides.length) % slides.length;
        showSlide(newIndex);
    }

    // Set up auto-scrolling
    function startAutoSlide() {
        autoSlide = setInterval(() => changeSlide(1), intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // Event listeners for buttons
    document.querySelector('.prev').addEventListener('click', () => {
        stopAutoSlide();
        changeSlide(-1);
        startAutoSlide();
    });

    document.querySelector('.next').addEventListener('click', () => {
        stopAutoSlide();
        changeSlide(1);
        startAutoSlide();
    });

    // Initialize
    showSlide(currentSlide);
    startAutoSlide();
});
