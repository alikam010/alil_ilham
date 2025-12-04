// script.js - Interaktivitas Website Biodata

/**
 * 1. Fungsi untuk toggle tema (Light/Dark Mode)
 * PERBAIKAN: Menggunakan class 'dark' agar sesuai dengan style.css
 */
function initThemeToggle() {
  const themeBtn = document.querySelector('#toggleTheme');
  const body = document.body;
  
  // Cek localStorage saat halaman dimuat
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark'); // Sesuai dengan css .dark
    themeBtn.textContent = '☀️ Mode Terang';
  }
  
  // Event listener tombol
  themeBtn.addEventListener('click', function() {
    body.classList.toggle('dark'); // Toggle class .dark
    
    if (body.classList.contains('dark')) {
      themeBtn.textContent = '☀️ Mode Terang';
      localStorage.setItem('theme', 'dark');
    } else {
      themeBtn.textContent = '🌙 Mode Gelap';
      localStorage.setItem('theme', 'light');
    }
  });
}

/**
 * 2. Fungsi untuk animasi skill cards saat di-hover
 */
function initSkillAnimations() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  skillItems.forEach(skill => {
    skill.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    skill.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

/**
 * 3. Fungsi untuk animasi info items (Pulse effect)
 */
function initInfoAnimations() {
  const infoItems = document.querySelectorAll('.info-item');
  
  infoItems.forEach(item => {
    item.addEventListener('click', function() {
      this.style.animation = 'pulse 0.5s ease';
      setTimeout(() => {
        this.style.animation = '';
      }, 500);
    });
  });
}

/**
 * 4. Fungsi pesan selamat datang
 */
function showWelcomeMessage() {
  const nama = document.querySelector('.value');
  const defaultText = '(Isi dengan nama kamu)';
  
  if (nama && nama.textContent.includes(defaultText)) {
    setTimeout(() => {
      console.log('👋 Selamat datang! Jangan lupa isi biodata kamu ya 😊');
    }, 1000);
  }
}

/**
 * 5. Fungsi Scroll Animation
 */
function initScrollAnimations() {
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
  });
}

/**
 * 6. Fungsi Jam Real-time
 */
function initRealTimeClock() {
  const footer = document.querySelector('.copyright');
  
  function updateTime() {
    const now = new Date();
    // Opsi format tanggal bahasa Indonesia
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    const date = now.toLocaleDateString('id-ID', options);
    const time = now.toLocaleTimeString('id-ID');
    
    if (footer) {
      // Pastikan tidak menimpa copyright, hanya menambah waktu
      // Kita set ulang konten agar jam terus update
      footer.innerHTML = `&copy; 2025 Biodata Saya <br> <span style="font-size:0.8em">${date} • ${time}</span>`;
    }
  }
  
  updateTime();
  setInterval(updateTime, 1000);
}

/**
 * 7. Keyboard Shortcuts (Ctrl+D untuk Dark Mode)
 */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
      e.preventDefault();
      const themeBtn = document.querySelector('#toggleTheme');
      if (themeBtn) themeBtn.click();
    }
  });
}

/**
 * 8. Inisialisasi Semua Fungsi
 */
window.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Website Siap!');
  
  initThemeToggle();
  initSkillAnimations();
  initInfoAnimations();
  showWelcomeMessage();
  initScrollAnimations();
  initRealTimeClock();
  initKeyboardShortcuts();
});