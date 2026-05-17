// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and gallery items
document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (for future enhancement)
const navLinks = document.querySelector('.nav-links');
let isMenuOpen = false;

// Add mobile menu button if needed in the future
function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    navLinks.style.display = isMenuOpen ? 'flex' : 'none';
}

// WhatsApp link validation - replace with actual number
const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
whatsappLinks.forEach(link => {
    const currentHref = link.getAttribute('href');
    // Replace 351000000000 with actual WhatsApp number
    if (currentHref.includes('351000000000')) {
        console.log('Remember to replace 351000000000 with your actual WhatsApp number');
    }
});

// Booking.com link - replace with actual property link
const bookingLinks = document.querySelectorAll('a[href="https://booking.com"]');
bookingLinks.forEach(link => {
    console.log('Remember to replace https://booking.com with your actual Booking.com property URL');
});

console.log('Garajau Paradise website loaded successfully!');
console.log('TODO: Replace placeholder images with actual photos');
console.log('TODO: Update WhatsApp number: 351000000000');
console.log('TODO: Add actual Booking.com property URL');
console.log('TODO: Add Google Maps embed for location section');
