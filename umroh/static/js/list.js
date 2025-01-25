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


document.addEventListener('DOMContentLoaded', () => {
    const waLinks = document.querySelectorAll('.whatsapp-link');
    
    waLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Ambil data paket
            const paketName = link.getAttribute('data-paket');
            const paketHarga = link.getAttribute('data-harga');
            
            // Encode pesan untuk WhatsApp
            const waMessage = `Halo Admin, Saya ingin mendaftar Paket ${paketName} dengan harga Rp. ${paketHarga} JT. Mohon informasi lebih lanjut.`;
            const waUrl = `https://wa.me/81381016464?text=${encodeURIComponent(waMessage)}`;
            
            // Arahkan ke URL WhatsApp dengan pesan
            window.location.href = waUrl;
        });
    });
});


