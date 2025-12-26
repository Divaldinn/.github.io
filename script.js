/* =========================================
   1. CONFIGURACIÓN Y TRADUCCIONES
   ========================================= */

const translations = {
    en: {
        nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_education: "Education", nav_contact: "Contact",
        hero_hi: "Hi, my name is", hero_subtitle: "Systems Engineering Student & Software Developer",
        hero_desc: "Specialized in working at the system level with C++ and Linux, and moving to the cloud with Automation and Web solutions.",
        hero_cta: "View Projects", about_title: "About Me",
        about_p1: "I am a Computer Systems Engineering student at UNITEC...",
        about_p2: "Currently, I am delving into the development of AI models...",
        skills_title: "Skills", skill_cat_lang: "Programming Languages", skill_cat_tech: "Technologies & Tools", skill_cat_fund: "Engineering Fundamentals",
        projects_title: "Featured Projects",
        // Proyectos
        proj1_title: "Neural Network in C++", proj1_desc: "Feed-forward neural network from scratch without libraries.", proj1_achieve: "Implemented backpropagation manually.",
        proj2_title: "Report Automation", proj2_desc: "Automated service reports linking Forms, Slides, and Sheets.", proj2_achieve: "90% reduction in documentation time.",
        proj3_title: "UniTask Platform", proj3_desc: "Marketplace for students to delegate academic tasks.", proj3_achieve: "Full-stack development with Django.",
        proj4_title: "Linux Monitor", proj4_desc: "Auditing tool for Linux servers.", proj4_achieve: "Custom regex parsing.",
        // Footer/Edu/Contact
        edu_title: "Education", edu_degree: "Computer Systems Engineering", edu_status: "Currently enrolled (GPA: 8.0)",
        contact_next: "What's Next?", contact_title: "Get In Touch", contact_btn: "Say Hello", footer_credit: "Designed & Built by Héctor Salazar"
    },
    es: {
        nav_about: "Sobre mí", nav_skills: "Habilidades", nav_projects: "Proyectos", nav_education: "Educación", nav_contact: "Contacto",
        hero_hi: "Hola, mi nombre es", hero_subtitle: "Estudiante de Ing. en Sistemas y Desarrollador",
        hero_desc: "Especializado en C++ y Linux, migrando a la nube con soluciones Web y Automatización.",
        hero_cta: "Ver Proyectos", about_title: "Sobre Mí",
        about_p1: "Soy estudiante de Ingeniería en Sistemas en UNITEC...",
        about_p2: "Actualmente profundizando en IA desde cero y Linux.",
        skills_title: "Habilidades", skill_cat_lang: "Lenguajes", skill_cat_tech: "Tecnologías", skill_cat_fund: "Fundamentos",
        projects_title: "Proyectos Destacados",
        // Proyectos ES
        proj1_title: "Red Neuronal en C++", proj1_desc: "Red neuronal desde cero sin librerías externas.", proj1_achieve: "Backpropagation manual y optimización.",
        proj2_title: "Automatización de Reportes", proj2_desc: "Sistema que conecta Forms, Slides y Sheets.", proj2_achieve: "Reducción del 90% en tiempos.",
        proj3_title: "Plataforma UniTask", proj3_desc: "Marketplace para tareas académicas.", proj3_achieve: "Desarrollo Full-stack con Django.",
        proj4_title: "Monitor Linux", proj4_desc: "Herramienta de auditoría para servidores.", proj4_achieve: "Parsing con Regex y Bash.",
        // Footer/Edu/Contact
        edu_title: "Educación", edu_degree: "Ingeniería en Sistemas", edu_status: "Cursando (Promedio: 8.0)",
        contact_next: "¿Qué sigue?", contact_title: "Contáctame", contact_btn: "Di Hola", footer_credit: "Diseñado por Héctor Salazar"
    },
    pt: {
        nav_about: "Sobre", nav_skills: "Habilidades", nav_projects: "Projetos", nav_education: "Educação", nav_contact: "Contato",
        hero_hi: "Olá, meu nome é", hero_subtitle: "Estudante de Engenharia e Desenvolvedor",
        hero_desc: "Especializado em C++ e Linux.",
        hero_cta: "Ver Projetos", about_title: "Sobre Mim", about_p1: "Estudante da UNITEC...", about_p2: "Focando em IA e Linux.",
        skills_title: "Habilidades", skill_cat_lang: "Linguagens", skill_cat_tech: "Tecnologias", skill_cat_fund: "Fundamentos",
        projects_title: "Projetos em Destaque",
        proj1_title: "Rede Neural em C++", proj1_desc: "Rede neural do zero.", proj1_achieve: "Backpropagation manual.",
        proj2_title: "Automação de Relatórios", proj2_desc: "Conecta Forms, Slides e Sheets.", proj2_achieve: "Redução de 90%.",
        proj3_title: "Plataforma UniTask", proj3_desc: "Marketplace acadêmico.", proj3_achieve: "Full-stack Django.",
        proj4_title: "Monitor Linux", proj4_desc: "Ferramenta de auditoria.", proj4_achieve: "Regex e Bash.",
        edu_title: "Educação", edu_degree: "Engenharia de Sistemas", edu_status: "Cursando (Média: 8.0)",
        contact_next: "O que vem a seguir?", contact_title: "Contato", contact_btn: "Diga Olá", footer_credit: "Feito por Héctor Salazar"
    },
    fr: {
        nav_about: "À propos", nav_skills: "Compétences", nav_projects: "Projets", nav_education: "Éducation", nav_contact: "Contact",
        hero_hi: "Bonjour, je m'appelle", hero_subtitle: "Étudiant Ingénieur & Développeur",
        hero_desc: "Spécialisé en C++ et Linux.",
        hero_cta: "Voir Projets", about_title: "À propos", about_p1: "Étudiant à l'UNITEC...", about_p2: "IA et Linux.",
        skills_title: "Compétences", skill_cat_lang: "Langages", skill_cat_tech: "Technologies", skill_cat_fund: "Fondamentaux",
        projects_title: "Projets",
        proj1_title: "Réseau de Neurones C++", proj1_desc: "IA sans librairies.", proj1_achieve: "Backpropagation manuel.",
        proj2_title: "Automatisation", proj2_desc: "Connecte Forms, Slides, Sheets.", proj2_achieve: "Gain de temps de 90%.",
        proj3_title: "UniTask", proj3_desc: "Plateforme web académique.", proj3_achieve: "Full-stack Django.",
        proj4_title: "Moniteur Linux", proj4_desc: "Audit serveur.", proj4_achieve: "Regex et Bash.",
        edu_title: "Éducation", edu_degree: "Ingénierie Système", edu_status: "En cours (Moyenne: 8.0)",
        contact_next: "Et maintenant ?", contact_title: "Contactez-moi", contact_btn: "Dire Bonjour", footer_credit: "Conçu par Héctor Salazar"
    }
};

const cvFiles = {
    en: "CVHectorSalazar.pdf",
    es: "CVHectorSalazar_ES.pdf",
    pt: "CVHectorSalazar_PT.pdf",
    fr: "CVHectorSalazar_FR.pdf"
};

// Función para establecer idioma y actualizar CV
function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    const switcher = document.getElementById('lang-switcher');
    if(switcher) switcher.value = lang;

    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        const newCvFile = cvFiles[lang] || cvFiles['en'];
        cvLink.setAttribute('href', newCvFile);
    }
}

function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('fr')) return 'fr';
    return 'en';
}

/* =========================================
   2. INICIALIZACIÓN Y EFECTO GLOW (CÓDIGO SOLICITADO)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // A. Idioma
    const lang = detectLanguage();
    setLanguage(lang);
    document.getElementById('lang-switcher').addEventListener('change', (e) => setLanguage(e.target.value));

    // B. Analytics
    fetchVisitCount();
    setInterval(updateDisplay, 1000);

    // C. CÓDIGO DEL EFECTO GLOW (INTEGRADO AQUÍ)
    // ---------------------------------------------------------
    console.clear();

    const cardsContainer = document.querySelector(".cards");
    const cardsContainerInner = document.querySelector(".cards__inner");
    const cards = Array.from(document.querySelectorAll(".card"));
    const overlay = document.querySelector(".overlay");

    // Verificar si existen para evitar errores
    if (cardsContainer && overlay && cards.length > 0) {
        
        const applyOverlayMask = (e) => {
            const overlayEl = e.currentTarget;
            const x = e.pageX - cardsContainer.offsetLeft;
            const y = e.pageY - cardsContainer.offsetTop;

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
            // Se asume que el último elemento es el enlace/botón CTA
            createOverlayCta(overlayCard, cardEl.lastElementChild);
            overlay.append(overlayCard);
            observer.observe(cardEl);
        };

        cards.forEach(initOverlayCard);
        document.body.addEventListener("pointermove", applyOverlayMask);
    }
});

/* =========================================
   3. OTRAS UTILIDADES (ANALYTICS, FORM, ETC)
   ========================================= */

const analyticsData = { startTime: Date.now(), visits: "..." };

function fetchVisitCount() {
    // Simulación o llamada API real
    analyticsData.visits = 450; 
    updateDisplay();
}

function updateDisplay() {
    const timeSpent = Math.floor((Date.now() - analyticsData.startTime) / 1000);
    const display = document.getElementById('analytics-display');
    if (display) {
        display.innerHTML = `Time on page: ${timeSpent}s | Total Visits: ${analyticsData.visits}`;
    }
}

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('sender-name').value;
        const subject = document.getElementById('subject').value;
        const body = document.getElementById('body').value;
        window.location.href = `mailto:hectore.salazar83@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + "\n\n" + body)}`;
    });
}
