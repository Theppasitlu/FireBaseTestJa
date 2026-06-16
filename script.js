const translations = {
    en: {
        home: "Home",
        services: "Services",
        about: "About",
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
});
