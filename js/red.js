const flashcardsData = [
    {
        tag: "RED",
        q: "¿Qué define esencialmente a un Recurso Educativo Digital (RED)?",
        a: "Es cualquier material codificado digitalmente desarrollado con una intencionalidad pedagógica clara, " +
            "diseñado para cumplir un objetivo de aprendizaje definido y estructurado con propiedades didácticas que potencian el autoaprendizaje."
    },
    {
        tag: "REA",
        q: "¿Cuál es la característica jurídica indispensable de un REA?",
        a: "Son materiales didácticos de acceso libre y gratuito que poseen licencias de propiedad intelectual " +
            "permisivas (como Creative Commons), las cuales facultan legalmente a terceros a usarlos, adaptarlos y distribuirlos."
    },
    {
        tag: "Licenciamiento",
        q: "¿Qué restricción impone la cláusula 'ShareAlike (SA)' o 'Compartir Igual'?",
        a: "Determina que si un usuario modifica, mezcla o genera un nuevo recurso derivado del original, tiene " +
            "la obligación regulatoria estricta de publicar y distribuir su nueva obra bajo exactamente la misma licencia Creative Commons."
    },
    {
        tag: "Estándares",
        q: "¿Por qué es clave el estándar de interoperabilidad al almacenar un recurso?",
        a: "Garantiza que el archivo didáctico o software multimedia pueda ser importado, ejecutado y evaluado " +
            "correctamente en cualquier Plataforma de Gestión de Aprendizaje (LMS como Moodle o Canvas) sin sufrir daños estructurales."
    },
    {
        tag: "Las 5R",
        q: "¿A qué se refiere la libertad de 'Revisar' en el marco de las 5R de David Wiley?",
        a: "Es el permiso legal y técnico para adaptar, ajustar, traducir, modificar o alterar el recurso educativo " +
            "original con el objetivo de contextualizarlo o adecuarlo a las necesidades particulares de un grupo escolar."
    },
    {
        tag: "Las 5R",
        q: "¿Qué autoriza la R de 'Remezclar' en los Recursos Abiertos?",
        a: "Permite combinar el recurso educativo abierto original con otros REA para dar origen a una creación " +
            "didáctica integrada enteramente nueva."
    },
    {
        tag: "Licenciamiento",
        q: "¿Qué limitación extrema tiene la licencia Creative Commons con la cláusula 'ND' (No Derivadas)?",
        a: "Prohíbe terminantemente la distribución de versiones modificadas o adaptaciones del recurso. " +
            "Solo se permite descargar y compartir el material exactamente en su formato y estructura original."
    },
    {
        tag: "Licenciamiento",
        q: "¿Cuál es la licencia Creative Commons más abierta y recomendada para la divulgación global?",
        a: "La licencia CC BY (Atribución). Solo exige que el usuario final dé crédito explícito al autor de la " +
            "obra original, permitiendo comercializar, remezclar y modificar el material libremente."
    },
    {
        tag: "Licenciamiento",
        q: "¿Qué implica la cláusula 'NC' (No Comercial) en un recurso educativo?",
        a: "Impide que terceros utilicen el material o cualquier obra que derive de él para fines comerciales, " +
            "ventas directas, cobros de suscripción o generación de lucro."
    },
    {
        tag: "Metadatos",
        q: "¿Qué papel juegan los Metadatos en la catalogación de RED?",
        a: "Son etiquetas estructuradas que describen las características técnicas y pedagógicas del recurso " +
            "(autor, idioma, competencias, formato) para que los buscadores y repositorios lo indexen de forma precisa."
    },
    /*
    {
        tag: "Estándares",
        q: "¿Qué es el estándar IEEE LOM?",
        a: "Es el estándar internacional de Metadatos para Objetos de Aprendizaje (Learning Object Metadata), " +
            "el cual define una estructura conceptual estructurada en 9 categorías para catalogar recursos digitales."
    },
    {
        tag: "Estándares",
        q: "¿Qué caracteriza al estándar simplificado 'Dublin Core'?",
        a: "Es un estándar de metadatos compuesto por 15 elementos básicos y transversales de descripción " +
            "(título, creador, materia, etc.), ampliamente utilizado por su sencillez y flexibilidad en la web."
    },

     */
    {
        tag: "Estándares",
        q: "¿Qué significan las siglas 'SCORM' en el ámbito e-learning?",
        a: "Sharable Content Object Reference Model. Es un conjunto de estándares técnicos que permite empaquetar " +
            "un curso digital para que sea completamente portable, interactivo y trazable dentro de cualquier plataforma LMS."
    },
    {
        tag: "Almacenamiento",
        q: "¿Qué diferencia a un 'Repositorio' de una simple página web de almacenamiento?",
        a: "Un repositorio educativo organiza la información mediante sistemas estandarizados de metadatos, tiene " +
            "un proceso de curación de calidad académica y permite la interoperabilidad de búsqueda con otros repositorios."
    },
    {
        tag: "Curación",
        q: "¿En qué consiste el proceso pedagógico de 'Curación de Contenidos'?",
        a: "Consiste en buscar, filtrar, analizar críticamente, organizar e incorporar valor a la enorme cantidad " +
            "de recursos digitales de la web para poner a disposición del alumno únicamente los materiales más rigurosos y efectivos."
    },
    {
        tag: "Accesibilidad",
        q: "¿Qué establece la directriz de accesibilidad web (WCAG/W3C) en los RED?",
        a: "Demanda que el diseño de los recursos educativos digitales rompa las barreras de uso, asegurando que " +
            "personas con discapacidades visuales, auditivas o motoras puedan navegar e interactuar con la información sin exclusión."
    },
    {
        tag: "Calidad",
        q: "¿Qué evalúa la herramienta estándar de Calidad de Objetos de Aprendizaje (COdA)?",
        a: "Es un modelo de evaluación de calidad que califica 10 criterios clave de los objetos de aprendizaje " +
            "(5 de carácter pedagógico y 5 de carácter tecnológico/usabilidad) para guiar a los docentes en su producción."
    },
    {
        tag: "Planificación",
        q: "¿Qué es el guion pedagógico en el diseño de un RED?",
        a: "Es el documento maestro de planificación instruccional donde el docente detalla paso a paso la estructura, " +
            "los contenidos conceptuales, las interacciones multimedia y las evaluaciones que compondrán el recurso."
    },
    {
        tag: "Problemáticas",
        q: "¿Qué es la 'Infoxicación' y cómo la mitiga el correcto almacenamiento de RED?",
        a: "Es la parálisis por sobrecarga informativa. Un repositorio catalogado e indexado mediante metadatos " +
            "confiables y curación docente ahorra tiempo y asegura que los alumnos accedan directamente a información fidedigna."
    },
    {
        tag: "Licenciamiento",
        q: "¿Qué es el 'Dominio Público' (CC0) dentro del entorno académico?",
        a: "Es la categoría donde el autor renuncia voluntariamente a todos sus derechos patrimoniales sobre el " +
            "recurso a nivel mundial, permitiendo que cualquier persona lo use, modifique y comercialice sin necesidad de dar atribución."
    }
];

// --- ESTADOS DE LA APLICACIÓN ---
let currentCardIndex = 0;
let masteredCards = new Set();
let viewedCards = new Set([0]);
let currentFilter = 'all'; // 'all', 'pending', 'mastered'
let filteredIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// --- SISTEMA DE NAVEGACIÓN ---
function switchSection(sectionId) {
    document.querySelectorAll('.section-view').forEach(view => view.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(sectionId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// --- LÓGICA DE FILTRADO ---
function setFilter(filterType) {
    currentFilter = filterType;

    // Actualizar estilo visual de botones de filtro
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    if (filterType === 'all') {
        document.getElementById('btn-filter-all').classList.add('active');
        document.getElementById('txt-filtro-estado').innerText = "Filtro actual: Todas";
    } else if (filterType === 'pending') {
        document.getElementById('btn-filter-pending').classList.add('active');
        document.getElementById('txt-filtro-estado').innerText = "Filtro actual: Aún no dominadas";
    } else if (filterType === 'mastered') {
        document.getElementById('btn-filter-mastered').classList.add('active');
        document.getElementById('txt-filtro-estado').innerText = "Filtro actual: Dominadas";
    }

    // Re-calcular los índices que cumplen la condición
    applyFilter();
}

function applyFilter() {
    filteredIndices = [];
    for (let i = 0; i < flashcardsData.length; i++) {
        if (currentFilter === 'all') {
            filteredIndices.push(i);
        } else if (currentFilter === 'pending' && !masteredCards.has(i)) {
            filteredIndices.push(i);
        } else if (currentFilter === 'mastered' && masteredCards.has(i)) {
            filteredIndices.push(i);
        }
    }

    // Actualizar el número de tarjetas en los botones
    document.getElementById('btn-filter-all').innerText = `Ver Todas (${flashcardsData.length})`;
    document.getElementById('btn-filter-pending').innerText = `Aún no domino (${flashcardsData.length - masteredCards.size})`;
    document.getElementById('btn-filter-mastered').innerText = `Dominadas (${masteredCards.size})`;

    // Ajustar el índice activo de forma segura
    if (filteredIndices.length > 0) {
        currentCardIndex = 0; // Reiniciar al primer elemento de la lista filtrada
        updateCardUI();
    } else {
        showEmptyFilterMessage();
    }
}

function showEmptyFilterMessage() {
    const cardElement = document.getElementById('card');
    cardElement.classList.remove('flipped');
    document.getElementById('card-tag').innerText = "Vacio";
    document.getElementById('card-question').innerText = "No hay tarjetas en esta categoría bajo el filtro seleccionado.";
    document.getElementById('card-answer').innerText = "Para ver más contenido, cambia el filtro superior a 'Ver Todas' o sigue autoevaluándote.";
    document.getElementById('card-indicator').innerText = "0 de 0";
}

// --- LÓGICA DE TARJETAS ---
function updateCardUI() {
    if (filteredIndices.length === 0) {
        showEmptyFilterMessage();
        return;
    }

    const cardElement = document.getElementById('card');
    cardElement.classList.remove('flipped');

    const trueIndex = filteredIndices[currentCardIndex];
    const activeCardData = flashcardsData[trueIndex];

    setTimeout(() => {
        document.getElementById('card-tag').innerText = activeCardData.tag;
        document.getElementById('card-question').innerText = activeCardData.q;
        document.getElementById('card-answer').innerText = activeCardData.a;

        viewedCards.add(trueIndex);
        document.getElementById('card-indicator').innerText = `${currentCardIndex + 1} de ${filteredIndices.length}`;
        updateStats();
    }, 150);
}

function flipCard() {
    if (filteredIndices.length > 0) {
        document.getElementById('card').classList.toggle('flipped');
    }
}

function stopPropagation(e) {
    e.stopPropagation();
}

function markCard(isMastered) {
    if (filteredIndices.length === 0) return;

    const trueIndex = filteredIndices[currentCardIndex];

    if (isMastered) {
        masteredCards.add(trueIndex);
    } else {
        masteredCards.delete(trueIndex);
    }

    updateStats();

    // Si estamos usando un filtro que se ve afectado por el cambio de estado,
    // volvemos a aplicar el filtro para remover/agregar la tarjeta visualmente.
    if (currentFilter !== 'all') {
        applyFilter();
    } else {
        nextCard();
    }
}

function nextCard() {
    if (filteredIndices.length === 0) return;
    currentCardIndex = (currentCardIndex + 1) % filteredIndices.length;
    updateCardUI();
}

function prevCard() {
    if (filteredIndices.length === 0) return;
    currentCardIndex = (currentCardIndex - 1 + filteredIndices.length) % filteredIndices.length;
    updateCardUI();
}

function updateStats() {
    document.getElementById('txt-vistas').innerText = viewedCards.size;
    document.getElementById('txt-dominadas').innerText = masteredCards.size;

    // Actualizar la barra de progreso de estudio basado en el dominio (un máximo de 20 tarjetas)
    const progressPercentage = (masteredCards.size / flashcardsData.length) * 100;
    document.getElementById('study-progress-bar').style.width = `${progressPercentage}%`;
}

// --- LÓGICA DE DIAPOSITIVAS (PRESENTACIONES) ---
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(direction) {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex += direction;

    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;

    slides[currentSlideIndex].classList.add('active');
    document.getElementById('slide-index').innerText = `Diapositiva ${currentSlideIndex + 1} de ${slides.length}`;
}

// Inicializar al cargar la página
window.onload = () => {
    updateCardUI();
    setFilter('all');
};