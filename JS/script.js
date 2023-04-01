// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Hamburger Menu di Klik
document.querySelector('#hamburger-menu').onclick = () => {
navbarNav.classList.toggle('active')
};

// klik di luar sidebar untuk menghilangkan navbar
const Hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});