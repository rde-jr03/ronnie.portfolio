// Dynamic adjustment safeguard for the absolute position overlay if needed
window.addEventListener('resize', () => {
    const avatarBadge = document.querySelector('.avatar-badge');
    // Code placeholders for tracking complex animations or analytics breaks go here.
});

// Keeping the file loaded cleanly for potential event tracking or navbar dynamics later.
console.log("Portfolio hero section initialized successfully!");

// --- LET'S CONNECT FORM CONTROLLER ---
document.getElementById('portfolioContactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const recipientEmail = "your.email@example.com";
    
    const clientName = document.getElementById('formName').value;
    const clientEmail = document.getElementById('formEmail').value;
    const mailSubject = document.getElementById('formSubject').value;
    const messageBody = document.getElementById('formMessage').value;
    
    const structuredBody = `Name: ${clientName}\nEmail: ${clientEmail}\n\nMessage:\n${messageBody}`;
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(structuredBody)}`;
    
    window.location.href = mailtoUrl;
});


// --- SCROLL TO TOP CONTROLLER ---
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Detect user scrolling positioning coordinates
window.addEventListener('scroll', function() {
    // Button becomes visible once user scrolls past 400px down the site
    if (window.pageYOffset > 400) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Click element scroll reset trigger animation loop
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll back to top navigation context
    });
});