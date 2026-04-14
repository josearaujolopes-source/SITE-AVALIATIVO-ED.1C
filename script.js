/* --- BANCO DE DADOS DINÂMICO --- */
const CONTENT = {
    garagem: [
        { 
            nome: "GT-R R35 Liberty", 
            specs: "1200whp | E85 Fuel System", 
            tag: "Time Attack",
            img: "https://unsplash.com"
        },
        { 
            nome: "Porsche 911 Turbo S", 
            specs: "900cv | Stage 3 Methanol", 
            tag: "Street Weapon",
            img: "https://unsplash.com"
        },
        { 
            nome: "Mustang Shelby GT500", 
            specs: "Supercharger 2.9L | 850cv", 
            tag: "Muscle",
            img: "https://unsplash.com"
        }
    ],
    servicos: [
        { 
            titulo: "Remap de ECU", 
            desc: "Otimização via software para ganho de torque e potência mantendo a segurança mecânica.",
            img: "https://unsplash.com"
        },
        { 
            titulo: "Upgrade de Turbo", 
            desc: "Dimensionamento e instalação de turbinas roletadas para respostas imediatas.",
            img: "https://unsplash.com"
        }
    ],
    faq: [
        { q: "O remap diminui a vida útil do motor?", a: "Nossas calibrações são feitas dentro das margens de segurança térmica e mecânica do fabricante, otimizando a eficiência." },
        { q: "Quanto tempo demora o Stage 2?", a: "Para a maioria dos veículos, o processo leva de 4 a 6 horas, incluindo testes no dinamômetro." }
    ]
};

/* --- MOTORES DE RENDERIZAÇÃO --- */
const injectContent = () => {
    // 1. Garagem (Cards)
    const garageGrid = document.getElementById('grid-carros');
    garageGrid.innerHTML = CONTENT.garagem.map(carro => `
        <article class="card">
            <img src="${carro.img}" alt="${carro.nome}" class="card-img">
            <div class="card-content">
                <span class="badge" style="background:rgba(255,255,255,0.1)">${carro.tag}</span>
                <h3 style="margin-top:10px">${carro.nome}</h3>
                <p style="color:var(--primary); font-weight:bold">${carro.specs}</p>
            </div>
        </article>
    `).join('');

    // 2. Carrossel (Serviços)
    const carouselTrack = document.getElementById('carousel-track');
    carouselTrack.innerHTML = CONTENT.servicos.map(s => `
        <div class="carousel-item">
            <div>
                <h3>${s.titulo}</h3>
                <p>${s.desc}</p>
            </div>
            <img src="${s.img}" alt="${s.titulo}" style="width:100%; border-radius:12px">
        </div>
    `).join('');

    // 3. FAQ (Acordeão)
    const faqList = document.getElementById('faq-list');
    faqList.innerHTML = CONTENT.faq.map((f, i) => `
        <div class="acc-item">
            <button class="acc-trigger" onclick="toggleAcc(${i})">
                ${f.q} <span>▼</span>
            </button>
            <div class="acc-panel" id="p-${i}">
                <p style="padding:0 25px 25px">${f.a}</p>
            </div>
        </div>
    `).join('');
};

/* --- ACESSIBILIDADE E UX --- */
let baseFontSize = 100;
function fontSize(mod) {
    baseFontSize += (mod * 10);
    document.documentElement.style.fontSize = `${baseFontSize}%`;
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

function toggleAcc(id) {
    const panel = document.getElementById(`p-${id}`);
    const isVisible = panel.style.maxHeight !== '0px' && panel.style.maxHeight !== '';
    panel.style.maxHeight = isVisible ? '0px' : '200px';
}

let currentSlide = 0;
function moveCarousel(dir) {
    const track = document.getElementById('carousel-track');
    currentSlide = (currentSlide + dir + CONTENT.servicos.length) % CONTENT.servicos.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

/* --- SCROLL OBSERVER --- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.1 });

// Start Engine
window.addEventListener('DOMContentLoaded', () => {
    injectContent();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
