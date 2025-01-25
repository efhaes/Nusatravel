document.querySelectorAll('.testimoni-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.testimoni-overlay').style.opacity = '1';
    });
    item.addEventListener('mouseout', () => {
        item.querySelector('.testimoni-overlay').style.opacity = '0';
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Sembunyikan menu saat halaman di-scroll
window.addEventListener('scroll', () => {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});
