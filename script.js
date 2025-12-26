/* =========================================
   CONFIGURACIÓN Y TRADUCCIONES
   ========================================= */
const translations = {
    en: {
        nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_education: "Education", nav_contact: "Contact",
        hero_hi: "Hi, my name is", hero_subtitle: "Systems Engineering Student & Software Developer",
        hero_desc: "Specialized in working at the system level with C++ and Linux, and moving to the cloud with Automation and Web solutions.",
        hero_cta: "View Projects", about_title: "About Me",
        about_p1: "I am a Computer Systems Engineering student at UNITEC, having completed over 65% of my degree. My profile is hybrid: I possess a solid academic foundation in Digital Logic, Data Structures, and Networks, which I complement with an intense self-taught curiosity for Artificial Intelligence and Cybersecurity.",
        about_p2: "Currently, I am delving into the development of AI models from scratch (without libraries) and advanced Linux system administration.",
        skills_title: "Skills", skill_cat_lang: "Programming Languages", skill_cat_tech: "Technologies & Tools", skill_cat_fund: "Engineering Fundamentals",
        projects_title: "Featured Projects",
        proj1_title: "Neural Network in C++", proj1_desc: "Feed-forward neural network from scratch without libraries.", proj1_achieve: "Implemented backpropagation manually.",
        proj2_title: "Report Automation", proj2_desc: "Automated service reports linking Forms, Slides, and Sheets.", proj2_achieve: "90% reduction in documentation time.",
        proj3_title: "UniTask Platform", proj3_desc: "Marketplace for students to delegate academic tasks.", proj3_achieve: "Full-stack development with Auth and DB management.",
        proj4_title: "Linux Monitor", proj4_desc: "Auditing tool for Linux servers.", proj4_achieve: "Custom regex parsing.",
        edu_title: "Education", edu_degree: "Computer Systems Engineering", edu_status: "Currently enrolled (Overall GPA: 8.0)",
        contact_next: "What's Next?", contact_title: "Get In Touch", contact_desc: "Looking for new opportunities in automation and data analysis.", contact_btn: "Say Hello", footer_credit: "Designed & Built by Héctor Salazar"
    },
    es: {
        nav_about: "Sobre mí", nav_skills: "Habilidades", nav_projects: "Proyectos", nav_education: "Educación", nav_contact: "Contacto",
        hero_hi: "Hola, mi nombre es", hero_subtitle: "Estudiante de Ingeniería en Sistemas y Desarrollador",
        hero_desc: "Especializado en trabajar a nivel de sistema con C++ y Linux, y migrando a la nube con soluciones de Automatización y Web.",
        hero_cta: "Ver Proyectos", about_title: "Sobre Mí",
        about_p1: "Soy estudiante de Ingeniería en Sistemas Computacionales en UNITEC. Mi perfil es híbrido: poseo una sólida base académica en Lógica Digital, Estructuras de Datos y Redes.",
        about_p2: "Actualmente, estoy profundizando en el desarrollo de modelos de IA desde cero y administración avanzada de sistemas Linux.",
        skills_title: "Habilidades", skill_cat_lang: "Lenguajes de Programación", skill_cat_tech: "Tecnologías y Herramientas", skill_cat_fund: "Fundamentos de Ingeniería",
        projects_title: "Proyectos Destacados",
        proj1_title: "Red Neuronal en C++", proj1_desc: "Desarrollo de una red neuronal desde cero.", proj1_achieve: "Implementé manualmente backpropagation.",
        proj2_title: "Automatización de Reportes", proj2_desc: "Sistema que conecta Google Forms con Slides y Sheets.", proj2_achieve: "Reducción estimada del 90% en el tiempo.",
        proj3_title: "Plataforma UniTask", proj3_desc: "Plataforma web tipo marketplace.", proj3_achieve: "Desarrollo full-stack completo.",
        proj4_title: "Monitor Linux", proj4_desc: "Herramienta de auditoría para servidores Linux.", proj4_achieve: "Parsing con Regex.",
        edu_title: "Educación", edu_degree: "Ingeniería en Sistemas Computacionales", edu_status: "Cursando (Promedio: 8.0)",
        contact_next: "¿Qué sigue?", contact_title: "Contáctame", contact_desc: "Busco oportunidades en automatización y análisis de datos.", contact_btn: "Di Hola", footer_credit: "Diseñado por Héctor Salazar"
    },
    pt: { nav_about: "Sobre", hero_hi: "Olá, meu nome é", projects_title: "Projetos em Destaque", contact_btn: "Diga Olá", footer_credit: "Projetado por Héctor Salazar" },
    fr: { nav_about: "À propos", hero_hi: "Bonjour, je m'appelle", projects_title: "Projets en Vedette", contact_btn: "Dire Bonjour", footer_credit: "Conçu par Héctor Salazar" }
};

const cvFiles = { en: "CVHectorSalazar.pdf", es: "CVHectorSalazar_ES.pdf", pt: "CVHectorSalazar_PT.pdf", fr: "CVHectorSalazar_FR.pdf" };

function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.getElementById('lang-switcher').value = lang;
    const cvLink = document.getElementById('cv-link');
    if (cvLink) cvLink.setAttribute('href', cvFiles[lang] || cvFiles['en']);
}

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('fr')) return 'fr';
    return 'en';
}

/* =========================================
   GLOWY HOVER EFFECT (LÓGICA CORREGIDA)
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Iniciar Idioma
    setLanguage(detectLanguage());
    document.getElementById('lang-switcher').addEventListener('change', (e) => setLanguage(e.target.value));

    // 2. Iniciar Analytics
    fetchVisitCount();
    setInterval(updateDisplay, 1000);

    // 3. EFECTO GLOW (Cards)
    const cardsContainer = document.querySelector(".cards");
    const cards = Array.from(document.querySelectorAll(".card"));
    const overlay = document.querySelector(".overlay");

    if (cardsContainer && overlay && cards.length > 0) {

        const applyOverlayMask = (e) => {
            const overlayEl = e.currentTarget;
            
            // CORRECCIÓN: Usar getBoundingClientRect para precisión exacta (evita el lag y desface)
            const rect = cardsContainer.getBoundingClientRect();
            
            let clientX, clientY;
            
            // Detectar si es touch (móvil) o mouse
            if (e.changedTouches && e.changedTouches.length > 0) {
                clientX = e.changedTouches[0].clientX;
                clientY = e.changedTouches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }

            // Calcular X e Y relativos al contenedor
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
        };

        const createOverlayCta = (overlayCard, ctaEl) => {
            const overlayCta = document.createElement("div");
            overlayCta.classList.add("cta");
            overlayCta.textContent = ctaEl.textContent;
            overlayCta.setAttribute("aria-hidden", true);
            overlayCard.append(overlayCta);
        };

        const observer = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                const cardIndex = cards.indexOf(entry.target);
                let width = entry.borderBoxSize[0].inlineSize;
                let height = entry.borderBoxSize[0].blockSize;

                if (cardIndex >= 0 && overlay.children[cardIndex]) {
                    overlay.children[cardIndex].style.width = `${width}px`;
                    overlay.children[cardIndex].style.height = `${height}px`;
                }
            });
        });

        const initOverlayCard = (cardEl) => {
            const overlayCard = document.createElement("div");
            overlayCard.classList.add("card");
            // Clonamos el último elemento (CTA Link)
            createOverlayCta(overlayCard, cardEl.lastElementChild);
            overlay.append(overlayCard);
            observer.observe(cardEl);
        };

        cards.forEach(initOverlayCard);

        // Evento Mouse
        document.body.addEventListener("pointermove", (e) => {
            if (cardsContainer.contains(e.target)) {
                applyOverlayMask(e);
            }
        });

        // Evento Touch (Para teléfonos)
        document.body.addEventListener("touchmove", (e) => {
            if (cardsContainer.contains(e.target)) {
                applyOverlayMask(e);
            }
        }, { passive: true });
    }
});

// Analytics & Scroll
const analyticsData = { startTime: Date.now(), visits: "..." };
function fetchVisitCount() {
    // Simulación (Reemplazar con API real si tienes)
    analyticsData.visits = 455; 
    updateDisplay();
}
function updateDisplay() {
    const timeSpent = Math.floor((Date.now() - analyticsData.startTime) / 1000);
    const display = document.getElementById('analytics-display');
    if (display) display.innerHTML = `Time on page: ${timeSpent}s | Visits: ${analyticsData.visits}`;
}
document.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById("timeline-progress");
    if(bar) bar.style.height = scrolled + "%";
});
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('sender-name').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    window.location.href = `mailto:hectore.salazar83@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + "\n\n" + body)}`;
});
