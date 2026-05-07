const translations = {
    pt: {
        nav_home: "Home",
        nav_projects: "Projetos",
        nav_stack: "Stack",
        hero_subtitle: "Engenharia Full-stack de alto nível para projetos que exigem performance extrema e design de classe mundial.",
        hero_bio: "Com 7 anos de atuação no mercado, especializo-me em transformar visões complexas em sistemas digitais de alto impacto.",
        cta_projects: "Ver Projetos",
        cta_contact: "Contato",
        projects_title: "Projetos em Destaque",
        project_flagship_title: "Bender — Portal Avatar",
        project_flagship_desc: "O Cargo Chefe: Uma comunidade completa com interações sociais, banco de dados robusto, mini-games autorais e sistema de Bazaar (loja) integrado.",
        stack_title: "Tech Stack",
        footer_rights: "© 2026 Arthur Perdigão. Todos os direitos reservados.",
        cta_visit: "Visitar Projeto",
        stat_years: "7+ ANOS",
        stat_years_label: "Experiência",
        stat_stack: "FULL-STACK",
        stat_stack_label: "Especialista",
        stat_quality: "ELITE",
        stat_quality_label: "Padrão",
        projects: {
            bender: {
                title: "Bender — Portal Avatar",
                desc: "Uma comunidade completa com sistema de lojas, mini-games e interações sociais em tempo real.",
                link: "https://bender-goll.vercel.app/",
                gallery: [
                    { url: "bender%20avatar/home%20principal.png", caption: "Portal Principal" },
                    { url: "bender%20avatar/bazar.png", caption: "Sistema de Bazaar" },
                    { url: "bender%20avatar/perfil.png", caption: "Perfil de Usuário" }
                ]
            },
            apiflow: {
                title: "APIFlowTester",
                desc: "Ferramenta visual inovadora para simplificar testes de integração complexos através de um canvas drag-and-drop.",
                link: "https://github.com/arthurperdigao/APIFlowTester",
                gallery: [
                    { url: "apitesteflow/456168149-1108bcc0-35a7-438c-9d58-081b73e78ea0.png", caption: "Canvas de Testes" }
                ]
            },
            caravana: {
                title: "Caravana da Vera",
                desc: "Sistema completo de reservas de viagens, gestão de destinos e galeria de momentos interativa.",
                link: "https://caravanadavera.com.br/",
                gallery: [
                    { url: "caravana%20da%20vera/home%20principal.png", caption: "Home Page" },
                    { url: "caravana%20da%20vera/pacotes.png", caption: "Pacotes de Viagem" }
                ]
            },
            arenafacil: {
                title: "Arena Fácil — SaaS",
                desc: "Solução robusta para gestão de complexos esportivos com dashboard financeiro e reservas em tempo real.",
                link: "#",
                gallery: [
                    { url: "arena%20facil/dash%20board.png", caption: "Dashboard Administrativo" },
                    { url: "arena%20facil/comandos.png", caption: "Gestão de Comandas" }
                ]
            }
        }
    },
    en: {
        nav_home: "Home",
        nav_projects: "Projects",
        nav_stack: "Stack",
        hero_subtitle: "High-level Full-stack Engineering for projects requiring extreme performance and world-class design.",
        hero_bio: "With 7 years in the market, I specialize in transforming complex visions into high-impact digital systems.",
        cta_projects: "View Projects",
        cta_contact: "Contact",
        projects_title: "Featured Projects",
        project_flagship_title: "Bender — Avatar Portal",
        project_flagship_desc: "The Flagship: A complete community with social interactions, robust database, original mini-games, and integrated Bazaar (shop) system.",
        stack_title: "Tech Stack",
        footer_rights: "© 2026 Arthur Perdigão. All rights reserved.",
        cta_visit: "Visit Project",
        stat_years: "7+ YEARS",
        stat_years_label: "Experience",
        stat_stack: "FULL-STACK",
        stat_stack_label: "Specialist",
        stat_quality: "ELITE",
        stat_quality_label: "Standard",
        projects: {
            bender: {
                title: "Bender — Avatar Portal",
                desc: "A complete community with shop system, mini-games and real-time social interactions.",
                link: "https://bender-goll.vercel.app/",
                gallery: [
                    { url: "bender%20avatar/home%20principal.png", caption: "Main Portal" },
                    { url: "bender%20avatar/bazar.png", caption: "Bazaar System" },
                    { url: "bender%20avatar/perfil.png", caption: "User Profile" }
                ]
            },
            apiflow: {
                title: "APIFlowTester",
                desc: "Innovative visual tool to simplify complex integration tests through a drag-and-drop canvas.",
                link: "https://github.com/arthurperdigao/APIFlowTester",
                gallery: [
                    { url: "apitesteflow/456168149-1108bcc0-35a7-438c-9d58-081b73e78ea0.png", caption: "Test Canvas" }
                ]
            },
            caravana: {
                title: "Caravana da Vera",
                desc: "Complete travel reservation system, destination management and interactive moments gallery.",
                link: "https://caravanadavera.com.br/",
                gallery: [
                    { url: "caravana%20da%20vera/home%20principal.png", caption: "Home Page" },
                    { url: "caravana%20da%20vera/pacotes.png", caption: "Travel Packages" }
                ]
            },
            arenafacil: {
                title: "Arena Fácil — SaaS",
                desc: "Robust solution for sports complex management with financial dashboard and real-time reservations.",
                link: "#",
                gallery: [
                    { url: "arena%20facil/dash%20board.png", caption: "Admin Dashboard" },
                    { url: "arena%20facil/comandos.png", caption: "Command Management" }
                ]
            }
        }
    }
};

// State Management
let currentLang = 'pt';
let isXrayMode = false;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initThreeBackground();
    initLanguage();
    initRevealAnimations();
    initProjectModals();
    initMagneticButtons();
    initXrayMode();
    initHud();
    initScrambleText();
});

// HUD & Interactive elements
function initHud() {
    const hudRes = document.getElementById('hud-res');
    const hudScr = document.getElementById('hud-scr');
    const hudLng = document.getElementById('hud-lng');
    
    const updateHud = () => {
        hudRes.textContent = `${window.innerWidth}x${window.innerHeight}`;
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        hudScr.textContent = `${scrollPercent}%`;
        hudLng.textContent = currentLang.toUpperCase();
    };

    window.addEventListener('resize', updateHud);
    window.addEventListener('scroll', updateHud);
    updateHud();
}

// Three.js Background Glow
function initThreeBackground() {
    const canvas = document.getElementById('bg-canvas');
    // Simplified background effect using Canvas 2D for better performance and reliability
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        draw() {
            ctx.fillStyle = `rgba(0, 243, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 50; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}

// Language Switcher
function initLanguage() {
    const langBtn = document.getElementById('lang-btn');
    const langOptions = document.querySelectorAll('.lang-option');

    langBtn.addEventListener('click', () => {
        document.querySelector('.lang-dropdown').classList.toggle('active');
    });

    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.getAttribute('data-lang');
            setLanguage(lang);
            document.querySelector('.lang-dropdown').classList.remove('active');
        });
    });

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
        if (!langBtn.contains(e.target)) {
            document.querySelector('.lang-dropdown').classList.remove('active');
        }
    });
}

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Flag and Label
    document.getElementById('current-flag').textContent = lang === 'pt' ? '🇧🇷' : '🇺🇸';
    document.getElementById('current-lang').textContent = lang.toUpperCase();
}

// Scramble Effect for Headings
function initScrambleText() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const elements = document.querySelectorAll('.scramble');

    elements.forEach(el => {
        el.onmouseover = event => {
            let iteration = 0;
            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) {
                            return event.target.dataset.text[index];
                        }
                        return letters[Math.floor(Math.random() * 26)]
                    })
                    .join("");
                
                if(iteration >= event.target.dataset.text.length) {
                    clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 30);
        }
    });
}

// Project Modals & Gallery
function initProjectModals() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');
    
    let currentProject = null;
    let currentImgIndex = 0;

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            currentProject = translations[currentLang].projects[projectId];
            currentImgIndex = 0;
            updateModal();
            modal.classList.add('active');
        });
    });

    function updateModal() {
        const img = document.getElementById('modal-img');
        const title = document.getElementById('modal-title');
        const desc = document.getElementById('modal-desc');
        const link = document.getElementById('modal-link');
        const caption = document.getElementById('modal-caption');

        const currentGalleryItem = currentProject.gallery[currentImgIndex];
        img.src = currentGalleryItem.url;
        caption.textContent = currentGalleryItem.caption;
        title.textContent = currentProject.title;
        desc.textContent = currentProject.desc;
        link.href = currentProject.link;
        link.style.display = currentProject.link === "#" ? "none" : "inline-block";
    }

    document.querySelector('.prev').onclick = () => {
        currentImgIndex = (currentImgIndex - 1 + currentProject.gallery.length) % currentProject.gallery.length;
        updateModal();
    };

    document.querySelector('.next').onclick = () => {
        currentImgIndex = (currentImgIndex + 1) % currentProject.gallery.length;
        updateModal();
    };

    closeBtn.onclick = () => modal.classList.remove('active');
    window.onclick = (e) => { if(e.target == modal) modal.classList.remove('active'); };
}

// Reveal on Scroll
function initRevealAnimations() {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Magnetic Effect for Buttons
function initMagneticButtons() {
    const magnets = document.querySelectorAll('.magnetic');
    
    magnets.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}

// X-Ray Mode (Visual Debug/Alternate style)
function initXrayMode() {
    const toggle = document.getElementById('xray-toggle');
    toggle.addEventListener('click', () => {
        isXrayMode = !isXrayMode;
        document.body.classList.toggle('xray-active');
        toggle.style.color = isXrayMode ? 'var(--accent)' : 'var(--text)';
    });
}
