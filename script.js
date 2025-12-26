/* =========================================
   GLOWY HOVER EFFECT (CORREGIDO Y OPTIMIZADO)
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
        const rect = cardsContainer.getBoundingClientRect(); // LA CLAVE: Posición exacta en pantalla
        
        // Detectar si es mouse o touch (para teléfono)
        let clientX, clientY;
        
        if (e.changedTouches && e.changedTouches.length > 0) {
             // Es un toque en pantalla
            clientX = e.changedTouches[0].clientX;
            clientY = e.changedTouches[0].clientY;
        } else {
             // Es un mouse
            clientX = e.clientX;
            clientY = e.clientY;
        }

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
        createOverlayCta(overlayCard, cardEl.lastElementChild);
        overlay.append(overlayCard);
        observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);

    // Eventos para Mouse
    document.body.addEventListener("pointermove", (e) => {
        // Solo aplicar si estamos sobre o cerca de las cartas para ahorrar recursos
        if (cardsContainer.contains(e.target)) {
            applyOverlayMask(e);
        }
    });

    // Eventos para Teléfono (Touch)
    // Usamos 'touchmove' para que la luz siga el dedo al arrastrar
    document.body.addEventListener("touchmove", (e) => {
        if (cardsContainer.contains(e.target)) {
            applyOverlayMask(e);
        }
    }, { passive: true });
});

// ... resto de tu código JS (traducciones, analytics, etc) ...
