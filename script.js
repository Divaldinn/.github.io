// Diccionario de Traducciones (Mantenido del original)
const translations = {
    en: {
        nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_education: "Education", nav_contact: "Contact",
        hero_hi: "Hi, my name is", hero_subtitle: "Systems Engineering Student & Software Developer",
        hero_desc: "Specialized in working at the system level with C++ and Linux, and moving to the cloud with Automation and Web solutions. I build efficient software by understanding how the hardware works behind the scenes.",
        hero_cta: "View Projects", about_title: "About Me",
        about_p1: "I am a Computer Systems Engineering student at UNITEC, having completed over 65% of my degree. My profile is hybrid: I possess a solid academic foundation in Digital Logic, Data Structures, and Networks, which I complement with an intense self-taught curiosity for Artificial Intelligence and Cybersecurity.",
        about_p2: "Currently, I am delving into the development of AI models from scratch (without libraries) and advanced Linux system administration. I am motivated by solving complex problems where optimization and performance are key.",
        skills_title: "Skills", skill_cat_lang: "Programming Languages", skill_cat_tech: "Technologies & Tools", skill_cat_fund: "Engineering Fundamentals",
        projects_title: "Featured Projects",
        // Proyectos
        proj1_title: "Neural Network in C++", proj1_desc: "Feed-forward neural network from scratch without libraries.", proj1_achieve: "Implemented backpropagation manually.",
        proj2_title: "Report Automation", proj2_desc: "Automated service reports linking Forms, Slides, and Sheets.", proj2_achieve: "90% reduction in documentation time.",
        proj3_title: "UniTask Platform", proj3_desc: "Marketplace for students to delegate academic tasks.", proj3_achieve: "Full-stack development with Auth and DB management.",
        proj4_title: "Linux Monitor", proj4_desc: "Auditing tool for Linux servers.", proj4_achieve: "Custom regex parsing.",
        // Education/Footer
        edu_title: "Education", edu_degree: "Computer Systems Engineering", edu_status: "Currently enrolled (Overall GPA: 8.0)",
        edu_courses_title: "Outstanding Courses (Achieved):", course_1: "Kinematics and Dynamics (10)", course_2: "Object-Oriented Programming (9)", course_3: "Information Systems (9)", course_4: "Memory and Peripherals (9)", edu_next: "Next Steps:", edu_next_desc: "Digital Image Processing and WAN Security (Semester 26-1).",
        contact_next: "What's Next?", contact_title: "Get In Touch", contact_desc: "I'm currently looking for new opportunities to apply my skills in automation and data analysis. Whether you have a question or just want to say hi, I'll try my best to get back to you!", contact_btn: "Say Hello", footer_credit: "Designed & Built by Héctor Salazar"
    },
    es: {
        nav_about: "Sobre mí", nav_skills: "Habilidades", nav_projects: "Proyectos", nav_education: "Educación", nav_contact: "Contacto",
        hero_hi: "Hola, mi nombre es", hero_subtitle: "Estudiante de Ingeniería en Sistemas y Desarrollador de Software",
        hero_desc: "Especializado en trabajar a nivel de sistema con C++ y Linux, y migrando a la nube con soluciones de Automatización y Web. Construyo software eficiente entendiendo cómo funciona el hardware detrás de escena.",
        hero_cta: "Ver Proyectos", about_title: "Sobre Mí",
        about_p1: "Soy estudiante de Ingeniería en Sistemas Computacionales en UNITEC, con más del 65% de la carrera completada. Mi perfil es híbrido: poseo una sólida base académica en Lógica Digital, Estructuras de Datos y Redes, que complemento con una intensa curiosidad autodidacta por la Inteligencia Artificial y la Ciberseguridad.",
        about_p2: "Actualmente, estoy profundizando en el desarrollo de modelos de IA desde cero (sin librerías) y administración avanzada de sistemas Linux. Me motiva resolver problemas complejos donde la optimización y el rendimiento son clave.",
        skills_title: "Habilidades", skill_cat_lang: "Lenguajes de Programación", skill_cat_tech: "Tecnologías y Herramientas", skill_cat_fund: "Fundamentos de Ingeniería",
        projects_title: "Proyectos Destacados",
        proj1_title: "Red Neuronal en C++", proj1_desc: "Desarrollo de una red neuronal feed-forward desde cero.", proj1_achieve: "Implementé manualmente el algoritmo de backpropagation.",
        proj2_title: "Sistema de Automatización", proj2_desc: "Sistema que conecta Google Forms con Slides y Sheets.", proj2_achieve: "Reducción estimada del 90% en el tiempo.",
        proj3_title: "Plataforma UniTask", proj3_desc: "Plataforma web tipo marketplace para estudiantes.", proj3_achieve: "Desarrollo full-stack completo.",
        proj4_title: "Monitor de Procesos Linux", proj4_desc: "Herramienta de auditoría para servidores Linux.", proj4_achieve: "Parsing con Regex.",
        edu_title: "Educación", edu_degree: "Ingeniería en Sistemas Computacionales", edu_status: "Actualmente cursando (Promedio General: 8.0)",
        edu_courses_title: "Cursos Destacados (Logrados):", course_1: "Cinemática y Dinámica (10)", course_2: "Programación Orientada a Objetos (9)", course_3: "Sistemas de Información (9)", course_4: "Memoria y Periféricos (9)", edu_next: "Siguientes Pasos:", edu_next_desc: "Procesamiento Digital de Imágenes y Seguridad WAN (Semestre 26-1).",
        contact_next: "¿Qué sigue?", contact_title: "Contáctame", contact_desc: "Actualmente estoy buscando nuevas oportunidades para aplicar mis habilidades en automatización y análisis de datos. ¡Si tienes una pregunta o solo quieres saludar, haré lo posible por responderte!", contact_btn: "Di Hola", footer_credit: "Diseñado y Construido por Héctor Salazar"
    },
    // (Omitiendo PT y FR por brevedad, pero la lógica es la misma)
    pt: { nav_about: "Sobre", hero_hi: "Olá, meu nome é", hero_subtitle: "Estudante de Engenharia", projects_title: "Projetos em Destaque", contact_btn: "Diga Olá", footer_credit: "Projetado por Héctor Salazar" },
    fr: { nav_about: "À propos", hero_hi: "Bonjour, je m'appelle", hero_subtitle: "Étudiant Ingénieur", projects_title: "Projets en Vedette", contact_btn: "Dire Bonjour", footer_credit: "Conçu par Héctor Salazar" }
};

// Configuración de Archivos de CV
const cvFiles = {
    en: "CVHectorSalazar.pdf",
    es: "CVHectorSalazar_ES.pdf",
    pt: "CVHectorSalazar_PT.pdf",
    fr: "CVHectorSalazar_FR.pdf"
};

// Función de Cambio de Idioma
function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.getElementById('lang-switcher').value = lang;

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

// Inicialización General
document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLanguage();
    setLanguage(lang);

    document.getElementById('lang-switcher').addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    fetchVisitCount();
    setInterval(updateDisplay, 1000);
});

// Analytics
const analyticsData = { startTime: Date.now(), visits: "Loading..." };
function fetchVisitCount() {
    fetch('https://api.countapi.xyz/hit/divaldinn.github.io/visits')
        .then(res => res.json())
        .then(data => { analyticsData.visits = data.value; updateDisplay(); })
        .catch(err => { analyticsData.visits = "(Offline)"; });
}
function updateDisplay() {
    const timeSpent = Math.floor((Date.now() - analyticsData.startTime) / 1000);
    const display = document.getElementById('analytics-display');
    if (display) display.innerHTML = `Time on page: ${timeSpent}s | Total Visits: ${analyticsData.visits}`;
}

/* =========================================
   GLOWY HOVER EFFECT LOGIC (CORREGIDO)
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    console.clear();

    const cardsContainer = document.querySelector(".cards");
    const cardsContainerInner = document.querySelector(".cards__inner");
    const cards = Array.from(document.querySelectorAll(".card"));
    const overlay = document.querySelector(".overlay");

    if (!cardsContainer || !overlay || cards.length === 0) return;

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
        
        // ESTA ES LA CLAVE: Clona el último elemento (el <a> CTA)
        createOverlayCta(overlayCard, cardEl.lastElementChild);
        
        overlay.append(overlayCard);
        observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);
    document.body.addEventListener("pointermove", applyOverlayMask);
});

// Scroll Timeline
document.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("timeline-progress").style.height = scrolled + "%";
});

// Contact Form
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('sender-name').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    window.location.href = `mailto:hectore.salazar83@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + "\n\n" + body)}`;
});
