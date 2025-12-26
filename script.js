// Translations Dictionary
const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_education: "Education",
        nav_contact: "Contact",
        hero_hi: "Hi, my name is",
        hero_subtitle: "Systems Engineering Student & Software Developer",
        hero_desc: "Specialized in working at the system level with C++ and Linux, and moving to the cloud with Automation and Web solutions. I build efficient software by understanding how the hardware works behind the scenes.",
        hero_cta: "View Projects",
        about_title: "About Me",
        about_p1: "I am a Computer Systems Engineering student at UNITEC, having completed over 65% of my degree. My profile is hybrid: I possess a solid academic foundation in Digital Logic, Data Structures, and Networks, which I complement with an intense self-taught curiosity for Artificial Intelligence and Cybersecurity.",
        about_p2: "Currently, I am delving into the development of AI models from scratch (without libraries) and advanced Linux system administration. I am motivated by solving complex problems where optimization and performance are key.",
        skills_title: "Skills",
        skill_cat_lang: "Programming Languages",
        skill_cat_tech: "Technologies & Tools",
        skill_db_mod: "Database & Table Modeling",
        skill_cat_fund: "Engineering Fundamentals",
        projects_title: "Featured Projects",
        label_desc: "Description:",
        label_achieve: "Achievement:",
        proj1_title: "Neural Network Simulator in C++",
        proj1_desc: "Development of a feed-forward neural network from scratch, without using external AI libraries. I manually implemented the backpropagation algorithm, activation functions, and binary file handling for training.",
        proj1_achieve: "Demonstration of a deep understanding of the mathematical foundations of AI and memory optimization in C++.",
        proj2_title: "Report Automation System",
        proj2_desc: "Enterprise solution to automate the generation of service reports. The system connects Google Forms with Google Slides and Sheets, eliminating manual data entry.",
        proj2_achieve: "Estimated 90% reduction in the time required to create repetitive documents and elimination of human error.",
        proj3_title: "UniTask - Web Platform",
        proj3_desc: "A marketplace-type web platform that connects students to delegate and complete academic tasks. It includes a user authentication system, database management, and an administration panel.",
        proj3_achieve: "Complete full-stack development, from database design to user interface.",
        proj4_title: "Linux Process Monitor",
        proj4_desc: "An auditing tool for Linux servers. Custom scripts to monitor critical daemons (Systemd), count active processes, and verify environment integrity.",
        edu_title: "Education",
        edu_degree: "Computer Systems Engineering",
        edu_status: "Currently enrolled (Overall GPA: 8.0)",
        edu_courses_title: "Outstanding Courses (Achieved):",
        course_1: "Kinematics and Dynamics (10)",
        course_2: "Object-Oriented Programming (9)",
        course_3: "Information Systems (9)",
        course_4: "Memory and Peripherals (9)",
        edu_next: "Next Steps:",
        edu_next_desc: "Digital Image Processing and WAN Security (Semester 26-1).",
        contact_next: "What's Next?",
        contact_title: "Get In Touch",
        contact_desc: "I'm currently looking for new opportunities to apply my skills in automation and data analysis. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        contact_btn: "Say Hello",
        footer_credit: "Designed & Built by Héctor Salazar"
    },
    es: {
        nav_about: "Sobre mí",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_education: "Educación",
        nav_contact: "Contacto",
        hero_hi: "Hola, mi nombre es",
        hero_subtitle: "Estudiante de Ingeniería en Sistemas y Desarrollador de Software",
        hero_desc: "Especializado en trabajar a nivel de sistema con C++ y Linux, y migrando a la nube con soluciones de Automatización y Web. Construyo software eficiente entendiendo cómo funciona el hardware detrás de escena.",
        hero_cta: "Ver Proyectos",
        about_title: "Sobre Mí",
        about_p1: "Soy estudiante de Ingeniería en Sistemas Computacionales en UNITEC, con más del 65% de la carrera completada. Mi perfil es híbrido: poseo una sólida base académica en Lógica Digital, Estructuras de Datos y Redes, que complemento con una intensa curiosidad autodidacta por la Inteligencia Artificial y la Ciberseguridad.",
        about_p2: "Actualmente, estoy profundizando en el desarrollo de modelos de IA desde cero (sin librerías) y administración avanzada de sistemas Linux. Me motiva resolver problemas complejos donde la optimización y el rendimiento son clave.",
        skills_title: "Habilidades",
        skill_cat_lang: "Lenguajes de Programación",
        skill_cat_tech: "Tecnologías y Herramientas",
        skill_db_mod: "Modelado de Bases de Datos y Tablas",
        skill_cat_fund: "Fundamentos de Ingeniería",
        projects_title: "Proyectos Destacados",
        label_desc: "Descripción:",
        label_achieve: "Logro:",
        proj1_title: "Simulador de Red Neuronal en C++",
        proj1_desc: "Desarrollo de una red neuronal feed-forward desde cero, sin usar librerías externas de IA. Implementé manualmente el algoritmo de backpropagation, funciones de activación y manejo de archivos binarios para entrenamiento.",
        proj1_achieve: "Demostración de un profundo entendimiento de los fundamentos matemáticos de la IA y optimización de memoria en C++.",
        proj2_title: "Sistema de Automatización de Reportes",
        proj2_desc: "Solución empresarial para automatizar la generación de reportes de servicio. El sistema conecta Google Forms con Google Slides y Sheets, eliminando la entrada manual de datos.",
        proj2_achieve: "Reducción estimada del 90% en el tiempo requerido para crear documentos repetitivos y eliminación del error humano.",
        proj3_title: "UniTask - Plataforma Web",
        proj3_desc: "Plataforma web tipo marketplace que conecta estudiantes para delegar y completar tareas académicas. Incluye sistema de autenticación de usuarios, gestión de base de datos y panel de administración.",
        proj3_achieve: "Desarrollo full-stack completo, desde el diseño de base de datos hasta la interfaz de usuario.",
        proj4_title: "Monitor de Procesos Linux",
        proj4_desc: "Herramienta de auditoría para servidores Linux. Scripts personalizados para monitorear demonios críticos (Systemd), contar procesos activos y verificar la integridad del entorno.",
        edu_title: "Educación",
        edu_degree: "Ingeniería en Sistemas Computacionales",
        edu_status: "Actualmente cursando (Promedio General: 8.0)",
        edu_courses_title: "Cursos Destacados (Logrados):",
        course_1: "Cinemática y Dinámica (10)",
        course_2: "Programación Orientada a Objetos (9)",
        course_3: "Sistemas de Información (9)",
        course_4: "Memoria y Periféricos (9)",
        edu_next: "Siguientes Pasos:",
        edu_next_desc: "Procesamiento Digital de Imágenes y Seguridad WAN (Semestre 26-1).",
        contact_next: "¿Qué sigue?",
        contact_title: "Contáctame",
        contact_desc: "Actualmente estoy buscando nuevas oportunidades para aplicar mis habilidades en automatización y análisis de datos. ¡Si tienes una pregunta o solo quieres saludar, haré lo posible por responderte!",
        contact_btn: "Di Hola",
        footer_credit: "Diseñado y Construido por Héctor Salazar"
    },
    pt: {
        nav_about: "Sobre",
        nav_skills: "Habilidades",
        nav_projects: "Projetos",
        nav_education: "Educação",
        nav_contact: "Contato",
        hero_hi: "Olá, meu nome é",
        hero_subtitle: "Estudante de Engenharia de Sistemas e Desenvolvedor de Software",
        hero_desc: "Especializado em trabalhar no nível do sistema com C++ e Linux, e migrando para a nuvem com soluções de Automação e Web. Construo software eficiente entendendo como o hardware funciona nos bastidores.",
        hero_cta: "Ver Projetos",
        about_title: "Sobre Mim",
        about_p1: "Sou estudante de Engenharia de Sistemas de Computação na UNITEC, com mais de 65% do curso concluído. Meu perfil é híbrido: possuo uma sólida base acadêmica em Lógica Digital, Estruturas de Dados e Redes, que complemento com uma intensa curiosidade autodidata por Inteligência Artificial e Cibersegurança.",
        about_p2: "Atualmente, estou me aprofundando no desenvolvimento de modelos de IA do zero (sem bibliotecas) e administração avançada de sistemas Linux. Sou motivado por resolver problemas complexos onde otimização e desempenho são fundamentais.",
        skills_title: "Habilidades",
        skill_cat_lang: "Linguagens de Programação",
        skill_cat_tech: "Tecnologias e Ferramentas",
        skill_db_mod: "Modelagem de Banco de Dados e Tabelas",
        skill_cat_fund: "Fundamentos de Engenharia",
        projects_title: "Projetos em Destaque",
        label_desc: "Descrição:",
        label_achieve: "Conquista:",
        proj1_title: "Simulador de Rede Neural em C++",
        proj1_desc: "Desenvolvimento de uma rede neural feed-forward do zero, sem usar bibliotecas externas de IA. Implementei manualmente o algoritmo de backpropagation, funções de ativação e manipulação de arquivos binários para treinamento.",
        proj1_achieve: "Demonstração de um profundo entendimento dos fundamentos matemáticos da IA e otimização de memória em C++.",
        proj2_title: "Sistema de Automação de Relatórios",
        proj2_desc: "Solução empresarial para automatizar a geração de relatórios de serviço. O sistema conecta Google Forms com Google Slides e Sheets, eliminando a entrada manual de dados.",
        proj2_achieve: "Redução estimada de 90% no tempo necessário para criar documentos repetitivos e eliminação de erro humano.",
        proj3_title: "UniTask - Plataforma Web",
        proj3_desc: "Plataforma web tipo marketplace que conecta estudantes para delegar e completar tarefas acadêmicas. Inclui sistema de autenticação de usuários, gestão de banco de dados e painel de administração.",
        proj3_achieve: "Desenvolvimento full-stack completo, desde o design do banco de dados até a interface do usuário.",
        proj4_title: "Monitor de Processos Linux",
        proj4_desc: "Ferramenta de auditoria para servidores Linux. Scripts personalizados para monitorar daemons críticos (Systemd), contar processos ativos e verificar a integridade do ambiente.",
        edu_title: "Educação",
        edu_degree: "Engenharia de Sistemas de Computação",
        edu_status: "Atualmente cursando (Média Geral: 8.0)",
        edu_courses_title: "Cursos de Destaque (Concluídos):",
        course_1: "Cinemática e Dinâmica (10)",
        course_2: "Programação Orientada a Objetos (9)",
        course_3: "Sistemas de Informação (9)",
        course_4: "Memória e Periféricos (9)",
        edu_next: "Próximos Passos:",
        edu_next_desc: "Processamento Digital de Imagens e Segurança WAN (Semestre 26-1).",
        contact_next: "O que vem a seguir?",
        contact_title: "Entre em Contato",
        contact_desc: "Atualmente estou procurando novas oportunidades para aplicar minhas habilidades em automação e análise de dados. Se você tiver uma pergunta ou apenas quiser dizer olá, farei o possível para responder!",
        contact_btn: "Diga Olá",
        footer_credit: "Projetado e Construído por Héctor Salazar"
    },
    fr: {
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_education: "Éducation",
        nav_contact: "Contact",
        hero_hi: "Bonjour, je m'appelle",
        hero_subtitle: "Étudiant en Ingénierie des Systèmes et Développeur Logiciel",
        hero_desc: "Spécialisé dans le travail au niveau système avec C++ et Linux, et passant au cloud avec des solutions d'Automatisation et Web. Je construis des logiciels efficaces en comprenant comment le matériel fonctionne en coulisses.",
        hero_cta: "Voir les Projets",
        about_title: "À propos de moi",
        about_p1: "Je suis étudiant en Ingénierie des Systèmes Informatiques à l'UNITEC, ayant terminé plus de 65% de mon diplôme. Mon profil est hybride : je possède une solide base académique en Logique Numérique, Structures de Données et Réseaux, que je complète par une intense curiosité autodidacte pour l'Intelligence Artificielle et la Cybersécurité.",
        about_p2: "Actuellement, je me plonge dans le développement de modèles d'IA à partir de zéro (sans bibliothèques) et l'administration système Linux avancée. Je suis motivé par la résolution de problèmes complexes où l'optimisation et la performance sont clés.",
        skills_title: "Compétences",
        skill_cat_lang: "Langages de Programmation",
        skill_cat_tech: "Technologies et Outils",
        skill_db_mod: "Modélisation de Bases de Données et Tables",
        skill_cat_fund: "Fondamentaux de l'Ingénierie",
        projects_title: "Projets en Vedette",
        label_desc: "Description :",
        label_achieve: "Réalisation :",
        proj1_title: "Simulateur de Réseau Neuronal en C++",
        proj1_desc: "Développement d'un réseau neuronal feed-forward à partir de zéro, sans utiliser de bibliothèques d'IA externes. J'ai implémenté manuellement l'algorithme de rétropropagation, les fonctions d'activation et la gestion des fichiers binaires pour l'entraînement.",
        proj1_achieve: "Démonstration d'une compréhension approfondie des fondements mathématiques de l'IA et de l'optimisation de la mémoire en C++.",
        proj2_title: "Système d'Automatisation de Rapports",
        proj2_desc: "Solution d'entreprise pour automatiser la génération de rapports de service. Le système connecte Google Forms avec Google Slides et Sheets, éliminant la saisie manuelle de données.",
        proj2_achieve: "Réduction estimée de 90% du temps nécessaire pour créer des documents répétitifs et élimination de l'erreur humaine.",
        proj3_title: "UniTask - Plateforme Web",
        proj3_desc: "Une plateforme web de type marketplace qui connecte les étudiants pour déléguer et compléter des tâches académiques. Elle comprend un système d'authentification des utilisateurs, une gestion de base de données et un panneau d'administration.",
        proj3_achieve: "Développement full-stack complet, de la conception de la base de données à l'interface utilisateur.",
        proj4_title: "Moniteur de Processus Linux",
        proj4_desc: "Un outil d'audit pour les serveurs Linux. Scripts personnalisés pour surveiller les démons critiques (Systemd), compter les processus actifs et vérifier l'intégrité de l'environnement.",
        edu_title: "Éducation",
        edu_degree: "Ingénierie des Systèmes Informatiques",
        edu_status: "Actuellement inscrit (Moyenne Générale : 8.0)",
        edu_courses_title: "Cours Marquants (Réussis) :",
        course_1: "Cinématique et Dynamique (10)",
        course_2: "Programmation Orientée Objet (9)",
        course_3: "Systèmes d'Information (9)",
        course_4: "Mémoire et Périphériques (9)",
        edu_next: "Prochaines Étapes :",
        edu_next_desc: "Traitement Numérique d'Images et Sécurité WAN (Semestre 26-1).",
        contact_next: "Et ensuite ?",
        contact_title: "Contactez-moi",
        contact_desc: "Je suis actuellement à la recherche de nouvelles opportunités pour appliquer mes compétences en automatisation et analyse de données. Que vous ayez une question ou que vous vouliez simplement dire bonjour, je ferai de mon mieux pour vous répondre !",
        contact_btn: "Dire Bonjour",
        footer_credit: "Conçu et Construit par Héctor Salazar"
    }
};

// Map of CV Files per Language
const cvFiles = {
    en: "CVHectorSalazar.pdf",      // Default
    es: "CVHectorSalazar_ES.pdf",
    pt: "CVHectorSalazar_PT.pdf",
    fr: "CVHectorSalazar_FR.pdf"
};

// Language Logic
function setLanguage(lang) {
    if (!translations[lang]) lang = 'en'; // Fallback

    // Update Text Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Select Value
    const switcher = document.getElementById('lang-switcher');
    if(switcher) switcher.value = lang;

    // Update CV Link
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        // Use mapping or fallback to English if missing
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

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Setup
    const lang = detectLanguage();
    setLanguage(lang);

    // Event Listener for Switcher
    const switcher = document.getElementById('lang-switcher');
    if(switcher) {
        switcher.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
    
    // 2. Analytics (CountAPI)
    fetchVisitCount();
    setInterval(updateDisplay, 1000);

    // 3. Glowy Hover Effect Logic
    initGlowEffect();
});

// Glowy Hover Effect Function
function initGlowEffect() {
    const cardsContainer = document.querySelector(".cards");
    const cardsContainerInner = document.querySelector(".cards__inner");
    const cards = Array.from(document.querySelectorAll(".project-card"));
    const overlay = document.querySelector(".overlay");

    // Guard clause
    if (!cardsContainer || !overlay || cards.length === 0) return;

    const applyOverlayMask = (e) => {
        const overlayEl = e.currentTarget;
        const x = e.pageX - cardsContainer.offsetLeft;
        const y = e.pageY - cardsContainer.offsetTop;

        overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
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
        overlayCard.classList.add("project-card");
        // No content needed, just structure
        overlay.append(overlayCard);
        observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);
    
    // Apply event listener for mouse movement
    document.body.addEventListener("pointermove", (e) => {
        if (cardsContainer.contains(e.target)) {
            applyOverlayMask(e);
        } else {
            // Optional: Hide glow if mouse leaves area
            overlay.style.setProperty('--opacity', '0');
        }
    });
    
    // Additional listeners to ensure smoothness
    if(overlay) {
        overlay.addEventListener("pointermove", applyOverlayMask);
        cardsContainer.addEventListener("pointermove", applyOverlayMask);
    }
}

// Path of Light Animation
document.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const progressBar = document.getElementById("timeline-progress");
    if(progressBar) progressBar.style.height = scrolled + "%";
});

/* =========================================
   ANALYTICS (CountAPI + Time Tracker)
   ========================================= */

const analyticsData = {
    startTime: Date.now(),
    visits: "..." 
};

function fetchVisitCount() {
    fetch('https://api.countapi.xyz/hit/divaldinn.github.io/visits')
        .then(res => res.json())
        .then(data => {
            analyticsData.visits = data.value;
            updateDisplay();
        })
        .catch(err => {
            console.error("Analytics Error:", err);
            analyticsData.visits = "(Offline)";
        });
}

function updateDisplay() {
    const timeSpent = Math.floor((Date.now() - analyticsData.startTime) / 1000);
    const display = document.getElementById('analytics-display');
    
    if (display) {
        display.innerHTML = `Time on page: ${timeSpent}s | Total Visits: ${analyticsData.visits}`;
    }
}

// Contact Form
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

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
