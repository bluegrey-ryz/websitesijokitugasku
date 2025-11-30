// --- 1. Menu Toggle (Untuk HP) ---
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// --- 2. Typing Effect (Disesuaikan dengan layanan) ---
const textElement = document.querySelector(".typing-text");
const words = ["Makalah", "PowerPoint", "Jurnal", "Laporan", "Skripsi", "Print Tugas"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}
document.addEventListener('DOMContentLoaded', type);

// --- 3. Copy WhatsApp Number ---
function copyWhatsAppNumber(button) {
    const number = "085169937561";
    navigator.clipboard.writeText(number).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = "✅ Tersalin!";
        button.style.background = "#10B981";
        button.style.color = "white";
        button.style.border = "none";
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = "";
            button.style.color = "";
            button.style.border = "";
        }, 2000);
    });
}

// --- 4. FAQ Accordion ---
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        // Tutup yang lain
        document.querySelectorAll('.faq-answer').forEach(ans => {
            if(ans !== answer) ans.classList.remove('open');
        });
        
        // Toggle yang diklik
        answer.classList.toggle('open');
    });
});

// --- 5. Scroll Animation (Fade Up) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});