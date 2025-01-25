   function toggleAccordion(element) {
        var parent = element.parentElement;
        var content = parent.querySelector('.accordion-content');
        var icon = element.querySelector('.icon');
        
        if (content.style.display === "block") {
            content.style.display = "none";
            icon.innerHTML = "➕";
        } else {
            content.style.display = "block";
            icon.innerHTML = "➖";
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        const colors = [
            'linear-gradient(to right, #c77b30, #ff8d33)', // Warna 1
            'linear-gradient(to right, #bebebe, #333)', // Warna 2
            'linear-gradient(to right, #e09900, #e09900)', // Warna 3
            'linear-gradient(to right, #9c346a, #d133ff)'  // Warna 4
        ];
    
        // Ambil semua card paket
        const paketItems = document.querySelectorAll('.paket-item,paket-body');
    
        // Assign warna ke setiap card
        paketItems.forEach((paketItem, index) => {
            const header = paketItem.querySelector('.paket-header');
            header.style.background = colors[index % colors.length];
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