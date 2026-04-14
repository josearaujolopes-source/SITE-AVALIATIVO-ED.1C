<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AutoPrime | Performance & Design</title>
  <!-- Link para o CSS que criamos antes -->
  <link rel="stylesheet" href="style.css">
  <!-- Fonte para aspecto tecnológico -->
  <link href="https://googleapis.com" rel="stylesheet">
</head>
<body>

  <!-- HEADER / NAVEGAÇÃO -->
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        <h1 class="site-title">AUTOPRIME</h1>
      </div>

      <button class="hamburger" aria-label="Abrir menu" aria-expanded="false">☰</button>
      
      <nav class="nav-desktop">
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#modelos">Modelos</a></li>
          <li><a href="#tecnologia">Tecnologia</a></li>
          <li><a href="#quiz">Desafio</a></li>
        </ul>
        
        <div class="nav-more">
          <button id="nav-more-btn" class="nav-more-btn" aria-expanded="false">
            Mais <span class="nav-more-arrow">▾</span>
          </button>
          <div class="nav-more-panel">
            <a href="#">Configurador</a>
            <a href="#">Test Drive</a>
            <a href="#">Assistência</a>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section id="home" class="hero-section reveal">
      <div class="hero-shell">
        <div class="hero-copy">
          <span class="eyebrow">Edição Limitada 2026</span>
          <h1>A nova era da performance chegou.</h1>
          <p class="hero-lead">Sinta a engenharia de precisão em cada curva. Do asfalto das pistas para o seu cotidiano.</p>
          
          <div class="hero-actions">
            <a href="#" class="action-btn">Explorar Modelos</a>
            <a href="#" class="secondary-btn">Ver Detalhes</a>
          </div>

          <div class="hero-points">
            <div class="hero-point">
              <strong>3.2s</strong>
              <span>0 a 100 km/h</span>
            </div>
            <div class="hero-point">
              <strong>V8 Bi-Turbo</strong>
              <span>Motorização</span>
            </div>
            <div class="hero-point">
              <strong>AI Drive</strong>
              <span>Assistência</span>
            </div>
          </div>
        </div>

        <!-- CARROSSEL -->
        <div class="surface-block carousel-wrapper">
          <img id="carousel-image" src="./img/car-design.png" alt="Carro Esportivo">
          <div class="carousel-content">
            <h2 id="carousel-title">Aerodinâmica Ativa</h2>
            <p id="carousel-description">Controle total do fluxo de ar para máxima aderência.</p>
            <div class="dots-container">
              <span class="dot active" data-index="0"></span>
              <span class="dot" data-index="1"></span>
              <span class="dot" data-index="2"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CURIOSIDADES / FATOS -->
    <section class="content-section reveal">
      <div class="info-card">
        <span class="mini-label">Você sabia?</span>
        <p id="fact-text">O carro mais rápido do mundo atualmente ultrapassa os 480 km/h.</p>
        <button id="fact-btn" class="secondary-btn">Próximo Fato</button>
      </div>
    </section>

    <!-- QUIZ -->
    <section id="quiz" class="content-section reveal">
      <div class="surface-block">
        <h2>Desafio Enthusiast</h2>
        <p>Teste seus conhecimentos sobre o mundo motor.</p>
        
        <form id="quiz-form">
          <div class="quiz-question">
            <p>1. Qual componente é responsável pela aerodinâmica em altas velocidades?</p>
            <label><input type="radio" name="q1" value="errado"> Radiador</label>
            <label><input type="radio" name="q1" value="certo"> Difusor Traseiro</label>
          </div>
          
          <!-- Adicione as outras perguntas q2, q3, q4, q5 aqui -->

          <button type="submit" class="action-btn">Enviar Respostas</button>
        </form>
        <div id="quiz-result" class="hidden"></div>
      </div>
    </section>
  </main>

  <!-- ACESSIBILIDADE -->
  <div class="accessibility-container">
    <button id="accessibility-btn" class="secondary-btn">⚙️ Acessibilidade</button>
    <div id="accessibility-menu" class="hidden">
      <button onclick="increaseFont()">Aumentar Fonte</button>
      <button onclick="decreaseFont()">Diminuir Fonte</button>
      <button onclick="toggleContrast()">Alto Contraste</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
