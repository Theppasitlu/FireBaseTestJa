// Initialize Firebase using compat SDK
let db;
if (typeof firebase !== 'undefined') {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
}

// Translations for Game page
const translations = {
    en: {
        home: "Home",
        services: "Services",
        about: "About",
        game: "Game",
        contact: "Contact Us",
        gameBadge: "✨ Gamers Space",
        gameTitle: "Level Up Your <span class='text-pastel-gradient'>Database</span>",
        gameSubtitle: "Explore game details that have been searched and shared by our cool community. Add your favorites to expand the vibe!",
        searchPlaceholder: "Search games...",
        filterAll: "All Games",
        filterRpg: "RPG",
        filterAction: "Action",
        addGameTitle: "Add A New Game 🎮",
        addGameDesc: "Help us expand the list! Fill in the game info to add it to the live directory.",
        gameFormTitle: "Game Title",
        gameFormGenre: "Genre",
        gameFormDesc: "Description",
        gameFormRating: "Rating (1-5 Hearts)",
        gameFormPlatforms: "Platforms",
        gameFormSubmit: "Add Game Now!",
        gameFormSubmitting: "Adding...",
        gameFormSuccess: "Awesome! Game added successfully!",
        gameFormError: "Oops! Something went wrong. Try again.",
        footerDesc: "Innovating the future of business, one digital experience at a time.",
        ftCompany: "Company",
        ftCareers: "Careers",
        ftPress: "Press",
        ftResources: "Resources",
        ftBlog: "Blog",
        ftHelp: "Help Center",
        ftGuidelines: "Guidelines",
        ftFollow: "Follow Us",
        ftRights: "© 2026 HPL Business. All rights reserved."
    },
    th: {
        home: "หน้าแรก",
        services: "บริการของเรา",
        about: "เกี่ยวกับเรา",
        game: "เกม",
        contact: "ติดต่อเรา",
        gameBadge: "✨ พื้นที่เกมเมอร์",
        gameTitle: "เลเวลอัปคลังข้อมูล <span class='text-pastel-gradient'>เกมสุดเจ๋ง</span>",
        gameSubtitle: "สำรวจรายละเอียดเกมที่ผู้เล่นคนอื่นๆ ค้นหาและแบ่งปันในคอมมูนิตี้สุดคูล และสามารถเพิ่มเกมโปรดของคุณได้เลย!",
        searchPlaceholder: "ค้นหาเกมที่นี่...",
        filterAll: "ทุกเกม",
        filterRpg: "สวมบทบาท (RPG)",
        filterAction: "ต่อสู้ (Action)",
        addGameTitle: "เพิ่มเกมใหม่เข้าระบบ 🎮",
        addGameDesc: "มาร่วมสร้างคลังข้อมูลให้ใหญ่ขึ้น! กรอกข้อมูลเกมด้านล่างเพื่อแสดงในบอร์ดทันที",
        gameFormTitle: "ชื่อเกม",
        gameFormGenre: "ประเภทเกม",
        gameFormDesc: "คำอธิบายเกม",
        gameFormRating: "ระดับความชอบ (1-5 ดวงใจ)",
        gameFormPlatforms: "แพลตฟอร์มการเล่น",
        gameFormSubmit: "กดเพิ่มเกมเลย!",
        gameFormSubmitting: "กำลังบันทึก...",
        gameFormSuccess: "เย้! บันทึกข้อมูลเกมใหม่สำเร็จเรียบร้อยแล้ว!",
        gameFormError: "อุ๊ย! เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้ง",
        footerDesc: "สร้างสรรค์อนาคตของธุรกิจ ผ่านประสบการณ์ดิจิทัลที่เหนือกว่า",
        ftCompany: "บริษัท",
        ftCareers: "ร่วมงานกับเรา",
        ftPress: "ข่าวสาร",
        ftResources: "ทรัพยากร",
        ftBlog: "บล็อก",
        ftHelp: "ศูนย์ช่วยเหลือ",
        ftGuidelines: "ข้อตกลงและเงื่อนไข",
        ftFollow: "ติดตามเรา",
        ftRights: "© 2026 HPL Business. สงวนลิขสิทธิ์."
    }
};

// Default Games Data
const defaultGames = [
    {
        title: "Genshin Impact",
        genre: "RPG",
        description: "An open-world action role-playing game. Explore the massive fantasy world of Teyvat, summon cool characters, and uncover mysteries.",
        descriptionTh: "เกมสวมบทบาทแนวแอ็กชันโอเพนเวิลด์สุดโด่งดัง ท่องดินแดนแฟนตาซีอันกว้างใหญ่แห่ง Teyvat สะสมตัวละครสุดเจ๋ง และคลี่คลายปริศนาต่างๆ",
        platforms: ["PC", "Mobile", "Console"],
        rating: 5,
        image: "assets/genshin.png"
    },
    {
        title: "Zenless Zone Zero",
        genre: "Action",
        description: "An urban fantasy action RPG. Play as a Proxy, dive into dangerous Hollows, enjoy stylish neon hack-and-slash combats in New Eridu.",
        descriptionTh: "เกมแอ็กชันสวมบทบาทสไตล์เมืองยุคอนาคตสุดล้ำ รับบทเป็น Proxy ตะลุยในมิติมรณะ Hollows สนุกไปกับการต่อสู้สไตล์ Neon แสนโฉบเฉี่ยว",
        platforms: ["PC", "Mobile", "Console"],
        rating: 5,
        image: "assets/zzz.png"
    }
];

let customGames = [];
let activeFilter = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    // Cache UI elements
    const gamesGrid = document.getElementById('gamesGrid');
    const gameSearch = document.getElementById('gameSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const addGameForm = document.getElementById('addGameForm');
    const ratingInput = document.getElementById('gameRatingInput');
    const ratingVal = document.getElementById('ratingVal');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');
    const formStatus = document.getElementById('formStatus');

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            nav.classList.toggle('active');
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

    // --- Theme Toggle Setup ---
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

    // --- Language Toggle Setup ---
    const langToggleBtn = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    let currentLang = localStorage.getItem('lang') || 'en';

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update placeholders
        if (gameSearch) {
            const placeholderText = translations[lang].searchPlaceholder;
            gameSearch.placeholder = placeholderText;
        }

        // Toggle text direction & indicators
        langText.textContent = lang === 'en' ? 'TH' : 'EN';
        document.documentElement.lang = lang;
        
        // Re-render games since description translations depend on language
        renderGames();
        updateRatingText();
    }

    // Initialize Language
    setLanguage(currentLang);

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'th' : 'en';
        localStorage.setItem('lang', currentLang);
        setLanguage(currentLang);
    });

    // --- Dynamic Slider Text ---
    function updateRatingText() {
        if (ratingInput && ratingVal) {
            const val = ratingInput.value;
            const text = currentLang === 'en' ? `💖 ${val}/5` : `💖 ${val}/5`;
            ratingVal.textContent = text;
        }
    }
    
    if (ratingInput) {
        ratingInput.addEventListener('input', updateRatingText);
    }

    // --- Load Games (Local Defaults + Firestore snapshot) ---
    if (db) {
        db.collection("games").orderBy("createdAt", "desc").onSnapshot((snapshot) => {
            customGames = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                customGames.push({
                    id: doc.id,
                    title: data.title,
                    genre: data.genre,
                    description: data.description,
                    platforms: data.platforms || ["PC"],
                    rating: data.rating || 5,
                    image: "assets/default.png"
                });
            });
            renderGames();
        }, (error) => {
            console.error("Error reading Firestore: ", error);
            renderGames();
        });
    } else {
        renderGames();
    }

    // --- Search & Filter Logic ---
    if (gameSearch) {
        gameSearch.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderGames();
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.getAttribute('data-filter');
            renderGames();
        });
    });

    // --- Render Games Grid ---
    function renderGames() {
        if (!gamesGrid) return;
        
        // Combine defaults and custom
        const allGames = [...defaultGames, ...customGames];
        
        // Apply Filters
        const filteredGames = allGames.filter(game => {
            // Genre Filter
            const matchesFilter = activeFilter === 'all' || game.genre.toLowerCase() === activeFilter.toLowerCase();
            
            // Search Query Filter
            const matchesSearch = game.title.toLowerCase().includes(searchQuery) || 
                                  game.genre.toLowerCase().includes(searchQuery) ||
                                  (game.descriptionTh && game.descriptionTh.toLowerCase().includes(searchQuery)) ||
                                  game.description.toLowerCase().includes(searchQuery);
                                  
            return matchesFilter && matchesSearch;
        });

        // Generate HTML
        if (filteredGames.length === 0) {
            gamesGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; font-size: 1.2rem; color: var(--text-muted);">
                    😢 ${currentLang === 'en' ? 'No games found.' : 'ไม่พบข้อมูลเกมที่ค้นหา'}
                </div>
            `;
            return;
        }

        gamesGrid.innerHTML = filteredGames.map(game => {
            // Pick description translation
            const desc = (currentLang === 'th' && game.descriptionTh) ? game.descriptionTh : game.description;
            
            // Generate heart icons
            const hearts = '💖'.repeat(game.rating) + '🖤'.repeat(5 - game.rating);
            
            // Render platforms
            const platformBadges = game.platforms.map(p => `<span class="platform-tag">${p}</span>`).join('');

            return `
                <div class="game-card-genz reveal-on-scroll">
                    <div class="card-img-container">
                        <img src="${game.image}" alt="${game.title}">
                        <span class="card-genre-badge">${game.genre}</span>
                    </div>
                    <div class="card-body-genz">
                        <div class="card-rating-genz">${hearts}</div>
                        <h3 class="card-title-genz">${game.title}</h3>
                        <p class="card-desc-genz">${desc}</p>
                        <div class="card-platforms">
                            ${platformBadges}
                        </div>
                        <div class="card-footer-genz">
                            <a href="https://www.google.com/search?q=${encodeURIComponent(game.title)}" target="_blank" class="btn-explore">
                                ${currentLang === 'en' ? 'Explore ➔' : 'สำรวจกัน ➔'}
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Trigger IntersectionObserver for new elements
        applyScrollReveal();
    }

    // Scroll reveal observer
    function applyScrollReveal() {
        const revealElements = document.querySelectorAll('.game-card-genz');
        const revealOptions = {
            threshold: 0.05,
            rootMargin: "0px 0px -20px 0px"
        };
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0) scale(1)";
                obs.unobserve(entry.target);
            });
        }, revealOptions);

        revealElements.forEach(el => {
            el.style.opacity = 0;
            el.style.transform = "translateY(20px)";
            el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            observer.observe(el);
        });
    }

    // --- Form Submission Handler ---
    if (addGameForm) {
        addGameForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Read inputs
            const title = document.getElementById('gameTitleInput').value.trim();
            const genre = document.getElementById('gameGenreInput').value;
            const description = document.getElementById('gameDescInput').value.trim();
            const rating = parseInt(ratingInput.value);
            
            // Platforms checkboxes
            const selectedPlatforms = [];
            const checkboxes = document.querySelectorAll('input[name="platforms"]:checked');
            checkboxes.forEach(cb => selectedPlatforms.push(cb.value));

            if (selectedPlatforms.length === 0) {
                // Must select at least one
                selectedPlatforms.push("PC");
            }

            // Set UI to loading state
            submitBtn.disabled = true;
            btnText.textContent = translations[currentLang].gameFormSubmitting || 'Adding...';
            btnSpinner.classList.remove('hidden');
            formStatus.className = 'form-status hidden';

            try {
                if (!db) {
                    throw new Error("Firebase SDK not loaded");
                }
                // Save to Firebase Firestore
                await db.collection("games").add({
                    title: title,
                    genre: genre,
                    description: description,
                    rating: rating,
                    platforms: selectedPlatforms,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });

                // Success
                formStatus.textContent = translations[currentLang].gameFormSuccess || 'Awesome! Game added successfully!';
                formStatus.className = 'form-status success';
                addGameForm.reset();
                ratingInput.value = 5;
                updateRatingText();
            } catch (error) {
                console.error("Error adding game to Firestore: ", error);
                formStatus.textContent = translations[currentLang].gameFormError || 'Oops! Something went wrong. Try again.';
                formStatus.className = 'form-status error';
            } finally {
                // Reset UI state
                submitBtn.disabled = false;
                btnText.textContent = translations[currentLang].gameFormSubmit || 'Add Game Now!';
                btnSpinner.classList.add('hidden');
            }
        });
    }
});
