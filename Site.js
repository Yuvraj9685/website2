// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll Animation: Fade In Effect for Sections
const fadeInElements = document.querySelectorAll('.fade-in');

function handleScrollAnimations() {
    fadeInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);

// Progress Bar Animation for Skills
const skillBars = document.querySelectorAll('.progress-bar');

function animateSkillBars() {
    skillBars.forEach((bar) => {
        if (bar.getBoundingClientRect().top < window.innerHeight) {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateSkillBars);

// Project Card Hover Animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Contact Form Animation
const contactForm = document.getElementById('contact-form');
const submitButton = contactForm.querySelector('button');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Simple form submission effect
    contactForm.innerHTML = '<h3>Thank you for your message!</h3><p>We will get back to you soon.</p>';
    contactForm.style.textAlign = 'center';
    contactForm.style.transition = 'opacity 1s ease-in-out';
    contactForm.style.opacity = '0';
    setTimeout(() => {
        contactForm.style.opacity = '1';
    }, 100);
});

