document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.banner-slider .slide');
    const dots = document.querySelectorAll('.banner-slider .dot');
    const prevBtn = document.querySelector('.banner-slider .controls .prev');
    const nextBtn = document.querySelector('.banner-slider .controls .next');

    let currentIndex = 0;
    const slideInterval = 3000; // Waktu antar slide (ms)

    // Fungsi untuk menampilkan slide berdasarkan index
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    };

    // Tombol Previous
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        resetAutoplay();
    });

    // Tombol Next
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        resetAutoplay();
    });

    // Klik pada dot
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
            resetAutoplay();
        });
    });

    // Autoplay
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
});

    // Tambahkan event listener untuk mendeteksi scroll
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });


    function toggleNavbar() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active'); // Tambah atau hapus class 'active'
    }

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

    document.addEventListener("DOMContentLoaded", () => {
        const items = document.querySelectorAll(".kenapa-pilih-item");
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("appear");
                    }
                });
            },
            { threshold: 0.2 } // Elemen terlihat 20% sebelum animasi dimulai
        );
    
        items.forEach((item) => observer.observe(item));
    });
    