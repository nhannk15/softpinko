// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Hamburger Menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.querySelector('.inner-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('active');
});

document.querySelectorAll('.inner-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
    });
});

// Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
});
