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

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const waLink = document.querySelector('.whatsapp-link');
    
    if (waLink) {
        waLink.addEventListener('click', (event) => {
            event.preventDefault();

            // Ambil data paket
            const paketName = waLink.getAttribute('data-paket');
            const paketHarga = waLink.getAttribute('data-harga');
            
            // Encode pesan untuk WhatsApp
            const waMessage = `Halo, saya tertarik mendaftar Paket ${paketName} dengan harga Rp. ${paketHarga}JT. Mohon info lebih lanjut.`;
            const waUrl = `https://wa.me/6281381016464?text=${encodeURIComponent(waMessage)}`;
            
            // Arahkan ke WhatsApp
            window.location.href = waUrl;
        });
    }
});


let autoplay = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, slideInterval);

// Reset autoplay setelah interaksi
const resetAutoplay = () => {
    clearInterval(autoplay);
    autoplay = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, slideInterval);
};

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentIndex);

