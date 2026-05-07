// PORTFOLIO.JS - JavaScript for Portfolio Website
// NAVIGATION: Hamburger toggle for mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
navToggle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') navLinks.classList.toggle('open');
});
// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
    if (window.innerWidth <= 600) navLinks.classList.remove('open');
    });
});
// Active link highlighting
function setActiveLink() {
    const links = document.querySelectorAll('.nav-links a');
    const fromTop = window.scrollY + 70;
    links.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
    });
}
window.addEventListener('scroll', setActiveLink);
// CONTACT FORM (Demo: shows message, doesn't send email)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMsg').style.display = 'block';
    document.getElementById('formMsg').textContent = 'Thank you for reaching out! I will get back to you soon.';
    this.reset();
    setTimeout(() => {
    document.getElementById('formMsg').style.display = 'none';
    }, 4000);
});
