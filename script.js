/**
 * ENGINE CORE - Arquitetura modular para performance extrema
 */
const engine = {
    // 1. Banco de Dados dos Projetos
    database: {
        fleet: [
            { id: "01", name: "Apex RS", power: "1.240 HP", torque: "1.100 NM", img: "https://unsplash.com" },
            { id: "02", name: "Void-X", power: "980 HP", torque: "950 NM", img: "https://unsplash.com" },
            { id: "03", name: "Ignis GT", power: "820 HP", torque: "880 NM", img: "https://unsplash.com" }
        ],
        protocols: [
            { title: "ECU Blueprinting", text: "Mapeamento em tempo real de 1.400 pontos de ignição para resposta linear de torque." },
            { title: "Active Aerodynamics", text: "Calibração de spoilers e difusores controlados por IA baseada na força G lateral." }
        ]
    },

    // 2. Controladores de Interface
    ui: {
        init() {
            this.renderFleet();
            this.renderProtocols();
            this.handleCursor();
            this.handleScroll();
        },

        renderFleet() {
            const mount = document.getElementById('showroom-mount');
            mount.innerHTML = engine.database.fleet.map(car => `
                <article class="fleet-card reveal">
                    <span class="spec">ID // ${car.id}</span>
                    <h3>${car.name}</h3>
                    <div class="stats-row" style="display:flex; gap:20px; margin-bottom:20px; color:#666; font-size:0.8rem;">
                        <span>PWR // ${car.power}</span>
                        <span>TRQ // ${car.torque}</span>
                    </div>
                    <img src="${car.img}" alt="${car.name}" style="width:100%; filter:grayscale(1); hover:grayscale(0); transition:0.5s;">
                </article>
            `).join('');
        },

        renderProtocols() {
            const mount = document.getElementById('accordion-mount');
            mount.innerHTML = engine.database.protocols.map((p, i) => `
                <div class="acc-item">
                    <button class="acc-btn" onclick="engine.ui.toggleAcc(${i})">
                        ${p.title} <span>+</span>
                    </button>
                    <div class="acc-content" id="acc-${i}">
                        <p>${p.text}</p>
                    </div>
                </div>
            `).join('');
        },

        toggleAcc(id) {
            const content = document.getElementById(`acc-${id}`);
            content.style.maxHeight = content.style.maxHeight === '0px' || !content.style.maxHeight ? '100px' : '0px';
        },

        handleCursor() {
            const cursor = document.getElementById('custom-cursor');
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
        },

        handleScroll() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('active'); });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        },

        zoom(val) {
            document.documentElement.style.fontSize = val === 1 ? '16px' : '20px';
        },

        contrast() {
            document.body.classList.toggle('high-contrast');
        }
    }
};

// Start System
window.addEventListener('DOMContentLoaded', () => engine.ui.init());
