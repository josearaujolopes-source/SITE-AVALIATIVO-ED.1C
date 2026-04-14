/* --- DADOS DA APLICAÇÃO (Single Source of Truth) --- */
const VEICULOS = [
    { id: 1, nome: "Hyperion GT", potencia: "1200cv", preco: "R$ 4.2M", img: "car1.jpg" },
    { id: 2, nome: "Tesla Model S Plaid", potencia: "1020cv", preco: "R$ 1.1M", img: "car2.jpg" },
    { id: 3, nome: "Porsche Taycan", potencia: "761cv", preco: "R$ 980k", img: "car3.jpg" }
];

const FAQS = [
    { q: "Qual o prazo de entrega?", a: "Para modelos personalizados, o prazo médio é de 120 dias." },
    { q: "Possuem garantia blindada?", a: "Sim, todos os nossos veículos contam com 5 anos de garantia total." }
];

/* --- RENDERIZAÇÃO DINÂMICA --- */
const renderContent = () => {
    // Render Cards de Modelos
    const gridModelos = document.getElementById('grid-modelos');
    gridModelos.innerHTML = VEICULOS.map(carro => `
        <article class="card" aria-labelledby="car-${carro.id}">
            <h3 id="car-${carro.id}">${carro.nome}</h3>
            <p>Potência: <strong>${carro.potencia}</strong></p>
            <p>A partir de: ${carro.preco}</p>
            <button class="btn-primary" style="margin-top: 15px; width: 100%;">Reservar</button>
        </article>
    `).join('');

    // Render Acordeão (FAQ)
    const accordionContainer = document.getElementById('faq-accordion');
    accordionContainer.innerHTML = FAQS.map((faq, index) => `
        <div class="accordion-item">
            <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(this)">
                ${faq.q} <span>+</span>
            </button>
            <div class="accordion-content" style="display: none; padding: 20px; color: var(--text-muted);">
                ${faq.a}
            </div>
        </div>
    `).join('');
};

/* --- ACESSIBILIDADE: GESTÃO DE FONTE --- */
let currentFontSize = 100;
const changeFontSize = (type) => {
    currentFontSize += (type === 'inc' ? 10 : -10);
    document.documentElement.style.fontSize = `${currentFontSize}%`;
};

const toggleContrast = () => {
    document.body.classList.toggle('high-contrast');
    const isHigh = document.body.classList.contains('high-contrast');
    localStorage.setItem('high-contrast', isHigh);
};

/* --- COMPONENTES: ACORDEÃO --- */
const toggleAccordion = (btn) => {
    const content = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    
    btn.setAttribute('aria-expanded', !isExpanded);
    content.style.display = isExpanded ? 'none' : 'block';
    btn.querySelector('span').textContent = isExpanded ? '+' : '-';
};

/* --- ANIMAÇÃO SCROLL REVEAL --- */
const scrollReveal = () => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
};

/* --- INICIALIZAÇÃO --- */
window.addEventListener('DOMContentLoaded', () => {
    renderContent();
    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Trigger inicial

    // Persistência de contraste
    if (localStorage.getItem('high-contrast') === 'true') toggleContrast();
});
