// --- SCROLL ACTION MONITOR ---
const scrollButton = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 400) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

scrollButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- MULTI-TRACK RUNTIME CAROUSEL CORE SYSTEM ---
function initializeSystemCarousels() {
    const activeCarousels = document.querySelectorAll('.carousel-container');
    
    activeCarousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.dot');
        const prevArrow = carousel.querySelector('.carousel-arrow.prev');
        const nextArrow = carousel.querySelector('.carousel-arrow.next');
        
        let slideIndex = 0;
        let runningInterval;
        
        function changeSlide(targetIndex) {
            if (targetIndex >= slides.length) slideIndex = 0;
            else if (targetIndex < 0) slideIndex = slides.length - 1;
            else slideIndex = targetIndex;
            
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            
            slides[slideIndex].classList.add('active');
            if (dots[slideIndex]) dots[slideIndex].classList.add('active');
        }
        
        function nextSlide() { changeSlide(slideIndex + 1); }
        function prevSlide() { changeSlide(slideIndex - 1); }
        
        function initInterval() {
            runningInterval = setInterval(nextSlide, 4000); // Transitions slide loops every 4 seconds
        }
        
        function killInterval() {
            clearInterval(runningInterval);
        }
        
        // Control Hooks
        if (nextArrow) nextArrow.addEventListener('click', () => { killInterval(); nextSlide(); initInterval(); });
        if (prevArrow) prevArrow.addEventListener('click', () => { killInterval(); prevSlide(); initInterval(); });
        
        dots.forEach((dot, dIdx) => {
            dot.addEventListener('click', () => { killInterval(); changeSlide(dIdx); initInterval(); });
        });
        
        carousel.addEventListener('mouseenter', killInterval);
        carousel.addEventListener('mouseleave', initInterval);
        
        initInterval();
    });
}

// Instantiate slider track controllers on execution
document.addEventListener('DOMContentLoaded', initializeSystemCarousels);