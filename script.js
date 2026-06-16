import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdLQk38so5XBqGyz6PaP_-bNi8UbETCQk",
  authDomain: "enviwater-ab389.firebaseapp.com",
  projectId: "enviwater-ab389",
  storageBucket: "enviwater-ab389.firebasestorage.app",
  messagingSenderId: "100738016379",
  appId: "1:100738016379:web:bfe5f5b35211d672e36ede",
  measurementId: "G-XS5BGLFJCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const translations = {
    en: {
        home: "Home",
        services: "Services",
        about: "About",
        game: "Game",
        contact: "Contact Us",
        heroTitle1: "Driving ",
        heroTitle2: "Innovation",
        heroTitle3: " Forward.",
        heroSubtitle: "We empower modern businesses with cutting-edge solutions, sleek designs, and robust strategies to dominate the digital landscape.",
        btnGetStarted: "Get Started",
        btnLearnMore: "Learn More",
        servicesTitle: "Our Services",
        servicesDesc: "Tailored solutions designed to scale your business and accelerate growth.",
        srv1Title: "Digital Strategy",
        srv1Desc: "Comprehensive roadmaps to navigate the digital world and achieve sustainable success.",
        srv2Title: "Web Development",
        srv2Desc: "High-performance, modern web applications built with cutting-edge technologies.",
        srv3Title: "Brand Identity",
        srv3Desc: "Crafting unique, memorable brand experiences that resonate with your audience.",
        srv4Title: "Data Analytics",
        srv4Desc: "Actionable insights derived from deep data analysis to drive informed decisions.",
        bento1Title: "Built for Speed",
        bento1Desc: "Optimized architecture ensuring lightning-fast load times.",
        bento2Title: "Secure",
        bento2Desc: "Enterprise-grade security protocols.",
        bento3Title: "Seamless Integration",
        bento3Desc: "Connect with your favorite tools effortlessly via our robust APIs.",
        ctaTitle: "Ready to Transform Your Business?",
        ctaDesc: "Join hundreds of forward-thinking companies scaling with us.",
        btnTalk: "Let's Talk",
        contactTitle: "Get In Touch",
        contactDesc: "Have a project in mind or want to learn more about our services? Reach out to us.",
        formName: "Full Name",
        formEmail: "Email Address",
        formPhone: "Phone Number",
        formMessage: "Message",
        btnSubmit: "Send Message",
        btnSubmitting: "Sending...",
        msgSuccess: "Thank you! Your message has been sent successfully.",
        msgError: "Something went wrong. Please try again later.",
        footerDesc: "Innovating the future of business, one digital experience at a time.",
        ftCompany: "Company",
        ftCareers: "Careers",
        ftPress: "Press",
        ftResources: "Resources",
        ftBlog: "Blog",
        ftHelp: "Help Center",
        ftGuidelines: "Guidelines",
        ftFollow: "Follow Us",
        ftRights: "© 2026 Nexus Business. All rights reserved."
    },
    th: {
        home: "หน้าแรก",
        services: "บริการของเรา",
        about: "เกี่ยวกับเรา",
        game: "เกม",
        contact: "ติดต่อเรา",
        heroTitle1: "ขับเคลื่อน ",
        heroTitle2: "นวัตกรรม",
        heroTitle3: " สู่อนาคต",
        heroSubtitle: "เราเสริมสร้างธุรกิจยุคใหม่ด้วยโซลูชันล้ำสมัย ดีไซน์โฉบเฉี่ยว และกลยุทธ์ที่แข็งแกร่ง เพื่อเป็นผู้นำในโลกดิจิทัล",
        btnGetStarted: "เริ่มต้นเลย",
        btnLearnMore: "เรียนรู้เพิ่มเติม",
        servicesTitle: "บริการของเรา",
        servicesDesc: "โซลูชันที่ปรับแต่งมาเพื่อขยายธุรกิจของคุณและเร่งการเติบโตอย่างยั่งยืน",
        srv1Title: "กลยุทธ์ดิจิทัล",
        srv1Desc: "แผนงานครอบคลุมเพื่อนำทางในโลกดิจิทัลและบรรลุความสำเร็จอย่างยั่งยืน",
        srv2Title: "พัฒนาเว็บไซต์",
        srv2Desc: "แอปพลิเคชันเว็บประสิทธิภาพสูง ทันสมัย สร้างด้วยเทคโนโลยีล่าสุด",
        srv3Title: "เอกลักษณ์ของแบรนด์",
        srv3Desc: "สร้างประสบการณ์แบรนด์ที่ไม่เหมือนใครและน่าจดจำ ซึ่งเข้าถึงกลุ่มเป้าหมายของคุณ",
        srv4Title: "วิเคราะห์ข้อมูล",
        srv4Desc: "ข้อมูลเชิงลึกที่นำไปใช้ได้จริงจากการวิเคราะห์ข้อมูลเชิงลึก เพื่อผลักดันการตัดสินใจ",
        bento1Title: "สร้างมาเพื่อความเร็ว",
        bento1Desc: "สถาปัตยกรรมที่ปรับให้เหมาะสม เพื่อรับประกันเวลาในการโหลดที่รวดเร็วดั่งสายฟ้า",
        bento2Title: "ปลอดภัยสูงสุด",
        bento2Desc: "โปรโตคอลความปลอดภัยระดับองค์กร",
        bento3Title: "เชื่อมต่อไร้รอยต่อ",
        bento3Desc: "เชื่อมต่อกับเครื่องมือโปรดของคุณอย่างง่ายดายผ่าน API ที่แข็งแกร่งของเรา",
        ctaTitle: "พร้อมที่จะพลิกโฉมธุรกิจของคุณหรือยัง?",
        ctaDesc: "ร่วมเป็นหนึ่งในบริษัทที่มีวิสัยทัศน์ที่กำลังเติบโตไปพร้อมกับเรา",
        btnTalk: "พูดคุยกับเรา",
        contactTitle: "ติดต่อเรา",
        contactDesc: "มีโปรเจกต์ที่สนใจหรือต้องการเรียนรู้เพิ่มเติมเกี่ยวกับบริการของเรา? ติดต่อเราได้เลย",
        formName: "ชื่อ-นามสกุล",
        formEmail: "ที่อยู่อีเมล",
        formPhone: "เบอร์โทรศัพท์",
        formMessage: "ข้อความ",
        btnSubmit: "ส่งข้อความ",
        btnSubmitting: "กำลังส่ง...",
        msgSuccess: "ขอบคุณครับ! ข้อความของคุณถูกส่งเรียบร้อยแล้ว",
        msgError: "เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้งในภายหลัง",
        footerDesc: "สร้างสรรค์อนาคตของธุรกิจ ผ่านประสบการณ์ดิจิทัลที่เหนือกว่า",
        ftCompany: "บริษัท",
        ftCareers: "ร่วมงานกับเรา",
        ftPress: "ข่าวสาร",
        ftResources: "ทรัพยากร",
        ftBlog: "บล็อก",
        ftHelp: "ศูนย์ช่วยเหลือ",
        ftGuidelines: "ข้อตกลงและเงื่อนไข",
        ftFollow: "ติดตามเรา",
        ftRights: "© 2026 Nexus Business. สงวนลิขสิทธิ์."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            nav.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // --- Header Scroll Effect ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.service-card, .bento-item, .reveal-on-scroll');
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0) scale(1)";
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        revealOnScroll.observe(el);
    });

    // --- Theme Toggle ---
    const themeToggleBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Language Toggle ---
    const langToggleBtn = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    let currentLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // Also update placeholders for form inputs
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        
        if (nameInput) nameInput.placeholder = lang === 'en' ? 'John Doe' : 'สมชาย ใจดี';
        if (emailInput) emailInput.placeholder = lang === 'en' ? 'john@example.com' : 'somchai@example.com';
        if (phoneInput) phoneInput.placeholder = lang === 'en' ? '081-234-5678' : '081-234-5678';
        if (messageInput) messageInput.placeholder = lang === 'en' ? 'How can we help you?' : 'พิมพ์ข้อความของคุณที่นี่...';

        // The button shows the language we CAN switch to
        langText.textContent = lang === 'en' ? 'TH' : 'EN';
        document.documentElement.lang = lang;
    }

    // Initialize Language
    if (currentLang !== 'en') {
        setLanguage(currentLang);
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'th' : 'en';
        localStorage.setItem('lang', currentLang);
        setLanguage(currentLang);
    });

    // --- Firebase Contact Form Submission ---
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            // Set UI to loading state
            submitBtn.disabled = true;
            btnText.textContent = translations[currentLang].btnSubmitting || 'Sending...';
            btnSpinner.classList.remove('hidden');
            formStatus.className = 'form-status hidden';

            try {
                // Add document to Cloud Firestore
                await addDoc(collection(db, "contacts"), {
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,
                    createdAt: serverTimestamp()
                });

                // Success
                formStatus.textContent = translations[currentLang].msgSuccess || 'Thank you! Your message has been sent successfully.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } catch (error) {
                console.error("Error saving document to Firestore: ", error);
                formStatus.textContent = translations[currentLang].msgError || 'Something went wrong. Please try again later.';
                formStatus.className = 'form-status error';
            } finally {
                // Reset UI state
                submitBtn.disabled = false;
                btnText.textContent = translations[currentLang].btnSubmit || 'Send Message';
                btnSpinner.classList.add('hidden');
            }
        });
    }
});
