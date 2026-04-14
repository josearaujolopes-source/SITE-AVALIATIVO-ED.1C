/* --- BANCO DE DADOS (Objeto de Configuração) --- */
const DATA = {
    carros: [
        { nome: "Turbo-S Concept", specs: "850cv | Tração Integral", cor: "Carbon Gray" },
        { nome: "Street Fighter GT", specs: "620cv | RWD", cor: "Racing Red" },
        { nome: "Volt-X Electric", specs: "1100nm | Dual Motor", cor: "Neon Blue" }
    ],
    faq: [
        { q: "Vocês fazem remap em carros originais?", a: "Sim, trabalhamos com estágios 1, 2 e 3 respeitando os limites do conjunto mecânico." },
        { q: "Qual a garantia dos serviços?", a: "Oferecemos 12 meses de garantia em mão de obra e suporte técnico vitalício para remaps." }
    ],
    tech: ["Turbinas Roletadas", "Suspensão Ativa", "Chassi Tubular", "ECU Programável"]
};

/* --- RENDERIZAÇÃO DINÂMICA --- */
const initApp = () => {
    // Injetar Cards da Garagem
    const garagem = document.getElementById('grid-carros');
    garagem.innerHTML = DATA.carros.map(carro => `
        <article class="card">
            <h3>${carro.nome}</h3>
            <p style="color: var(--primary)">${carro.specs}</p>
            <p>${carro.cor}</p>
        </article>
    `).join('');

    // Injetar Carrossel
    const track = document.getElementById('carousel-track');
    track.innerHTML = DATA.tech.map(t => `
        <div class="carousel-item"><h3>${t}</h3></div>
    `).join('');

    // Injetar FAQ (Acordeão)
    const faqList = document.getElementById('faq-list');
    faqList.innerHTML = DATA.faq.map((f, i) => `
        <div class="acc-item">
            <button class="acc-trigger" onclick="toggleAcc(${i})">${f.q}</button>
            <div class="acc-panel" id="panel-${i}"><p style="padding: 0 20px 20px">${f.a}</p></div>
        </div>
    `).join('');
};

/* --- ACESSIBILIDADE: CONTROLE DE FONTE --- */
let baseSize = 100;
function fontSize(mod) {
    baseSize += (mod * 10);
    document.documentElement.style.fontSize = `${baseSize}%`;
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

/* --- COMPONENTES: ACORDEÃO E CARROSSEL --- */
function toggleAcc(index) {
    const panel = document.getElementById(`panel-${index}`);
    const isOpened = panel.style.maxHeight !== '0px' && panel.style.maxHeight !== '';
    panel.style.maxHeight = isOpened ? '0px' : '200px';
}

let slide = 0;
function moveCarousel(dir) {
    const track = document.getElementById('carousel-track');
    slide = (slide + dir + DATA.tech.length) % DATA.tech.length;
    track.style.transform = `translateX(-${slide * 100}%)`;
}

/* --- SCROLL REVEAL (Intersection Observer) --- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

// Ignição do Sistema
window.addEventListener('DOMContentLoaded', () => {
    initApp();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
