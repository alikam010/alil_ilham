// script.js - Main Javascript

/**
 * 1. Mobile Menu Toggle
 * (Disiapkan jika nanti tombol menu dibutuhkan di desktop kecil)
 */
const mobileBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('mainNav');

if (mobileBtn && nav) {
    const navLinks = nav.querySelectorAll('a');

    mobileBtn.addEventListener('click', () => {
        toggleMenu();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    function toggleMenu() {
        nav.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            document.body.style.overflow = 'hidden'; 
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        }
    }
}

/**
 * 2. Real-time Clock Function (LENGKAP: Hari, Tanggal, Jam)
 */
function updateClock() {
    const clockElement = document.getElementById('realtimeClock');
    
    // Pastikan elemen ada sebelum dijalankan (menghindari error)
    if (clockElement) {
        const now = new Date();
        
        // Opsi Format Tanggal: Senin, 4 Desember 2025
        const dateOptions = { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        };
        
        // Opsi Format Jam: 10:30:45
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // Pakai format 24 jam (WIB)
        };

        const dateString = now.toLocaleDateString('id-ID', dateOptions);
        const timeString = now.toLocaleTimeString('id-ID', timeOptions);
        
        // Gabungkan dan Masukkan ke HTML
        clockElement.innerHTML = `${dateString} &nbsp;|&nbsp; ${timeString} WIB`;
    }
}

// Update setiap 1 detik
setInterval(updateClock, 1000);

// Panggil sekali saat load agar tidak menunggu 1 detik
document.addEventListener('DOMContentLoaded', updateClock);

/**
 * 3. Smooth Scroll (Opsional)
 * Agar link anchor (#materi) bergeser dengan halus
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});