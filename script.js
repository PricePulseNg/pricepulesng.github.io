// Navbar visibility on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll for problem cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.problem-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Form submission
const subscribeForm = document.getElementById("subscribeForm");
if (subscribeForm) {
    subscribeForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = this.querySelector("input[type='email']").value;
        
        // Here you would typically send the email to your backend
        alert("Thank you for subscribing! We'll notify you when PricePulse launches.");
        this.reset();
    });
}

// Scroll indicator click handler
document.querySelector('.scroll-indicator').addEventListener('click', function() {
    document.querySelector('.problem').scrollIntoView({
        behavior: 'smooth'
    });
});
