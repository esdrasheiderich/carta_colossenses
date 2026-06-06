document.addEventListener("DOMContentLoaded", () => {
  // Inicializa os ícones do Lucide de forma segura
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  } else {
    console.warn("Lucide icons library not loaded.");
  }

  // ==========================================
  // 1. SISTEMA DE NAVEGAÇÃO DE ABAS
  // ==========================================
  const navItems = document.querySelectorAll(".nav-item");
  const tabPanes = document.querySelectorAll(".tab-pane");

  function switchTab(tabId) {
    // Remove active das abas de navegação
    navItems.forEach(item => {
      if (item.getAttribute("data-tab") === tabId) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Mostra/oculta panes de conteúdo
    tabPanes.forEach(pane => {
      if (pane.id === `tab-${tabId}`) {
        pane.classList.add("active");
      } else {
        pane.classList.remove("active");
      }
    });

    // Executa lógicas específicas de abas, se necessário
    if (tabId === "mapa") {
      if (typeof window.initLeafletMap === 'function') {
        window.initLeafletMap();
      }
    } else if (tabId === "hino") {
      // Abre exegese do primeiro verso por padrão
      const activeVerse = document.querySelector(".hino-verse-card.active");
      if (!activeVerse) {
        const firstVerse = document.querySelector(".hino-verse-card");
        if (firstVerse) firstVerse.click();
      }
    }

    // Scrolla conteúdo principal de volta ao topo
    document.querySelector(".main-content").scrollTop = 0;
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Atalhos de navegação no painel inicial
  const featureCards = document.querySelectorAll("[data-target-tab]");
  featureCards.forEach(card => {
    card.addEventListener("click", () => {
      const targetTab = card.getAttribute("data-target-tab");
      switchTab(targetTab);
    });
  });


  // ==========================================
  // 2. CURIOISIDADES ARQUEOLÓGICAS & MODAIS
  // ==========================================
  const containerCuriosidades = document.getElementById("curiosidades-container");
  const modalCuriosidade = document.getElementById("curiosidade-modal");
  const modalClose = document.getElementById("modal-close");
  const modalBanner = document.getElementById("modal-banner");
  const modalTag = document.getElementById("modal-tag");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

  function renderCuriosidades() {
    if (!containerCuriosidades) return;
    containerCuriosidades.innerHTML = "";

    DATA.curiosidades.forEach(cur => {
      const card = document.createElement("div");
      card.className = "glass-card curiosidade-card";
      card.innerHTML = `
        <img src="${cur.imagem}" alt="${cur.titulo}" class="curiosidade-thumb">
        <div class="curiosidade-info">
          <span class="curiosidade-tag">${cur.categoria}</span>
          <h4>${cur.titulo}</h4>
          <p>${cur.resumo}</p>
        </div>
      `;

      card.addEventListener("click", () => {
        // Preenche o modal
        modalBanner.src = cur.imagem;
        modalTag.textContent = cur.categoria;
        modalTitle.textContent = cur.titulo;
        modalBody.innerHTML = cur.detalhes.replace(/\n/g, "<br><br>");
        
        // Abre o modal
        modalCuriosidade.classList.add("open");
      });

      containerCuriosidades.appendChild(card);
    });
  }

  function closeModal() {
    modalCuriosidade.classList.remove("open");
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalCuriosidade) {
    modalCuriosidade.addEventListener("click", (e) => {
      if (e.target === modalCuriosidade) {
        closeModal();
      }
    });
  }

  renderCuriosidades();


  // ==========================================
  // 3. MAPA INTERATIVO DO VALE DO LICO
  // ==========================================
  const mapCityGroups = document.querySelectorAll(".map-city-group");
  const mapDetailsContainer = document.getElementById("map-details-container");

  mapCityGroups.forEach(group => {
    group.addEventListener("click", () => {
      // Remove active de todas as cidades no mapa
      mapCityGroups.forEach(g => g.classList.remove("active"));
      
      // Adiciona active no grupo clicado
      group.classList.add("active");

      // Pega os dados da cidade
      const cityKey = group.getAttribute("data-city");
      const cityData = DATA.cidades.find(c => c.id === cityKey);

      if (cityData) {
        renderCityDetails(cityData);
      }
    });
  });

  function renderCityDetails(city) {
    if (!mapDetailsContainer) return;
    
    mapDetailsContainer.innerHTML = `
      <div class="city-detail-header">
        <span class="biblical-ref-tag">${city.referenciaBiblica}</span>
        <h3 style="margin-top:10px;">${city.nome}</h3>
      </div>
      
      <div class="city-info-row">
        <div class="city-info-label">Localização</div>
        <div class="city-info-val">${city.localizacao}</div>
      </div>
      
      <div class="city-info-row">
        <div class="city-info-label">Geografia no Vale</div>
        <div class="city-info-val">${city.distancia}</div>
      </div>
      
      <div class="city-info-row" style="flex-grow: 1;">
        <div class="city-info-label">Contexto e Importância Histórica</div>
        <div class="city-info-val" style="font-size:0.88rem; line-height:1.5; color:var(--text-main); text-align: justify;">
          ${city.contexto}
        </div>
      </div>
    `;
  }




  // ==========================================
  // 4. LINHA DO TEMPO CRONOLÓGICA
  // ==========================================
  const timelineContainer = document.getElementById("timeline-container");

  function renderTimeline() {
    if (!timelineContainer) return;
    
    // Limpa mantendo a linha vertical
    const line = timelineContainer.querySelector(".timeline-line");
    timelineContainer.innerHTML = "";
    if (line) timelineContainer.appendChild(line);

    DATA.timeline.forEach((item, index) => {
      const isEven = index % 2 === 0;
      const tItem = document.createElement("div");
      tItem.className = "timeline-item";

      const leftCol = document.createElement("div");
      leftCol.className = isEven ? "timeline-left" : "timeline-right";
      
      const badge = document.createElement("span");
      badge.className = "timeline-badge";
      badge.textContent = item.ano;
      leftCol.appendChild(badge);

      const rightCol = document.createElement("div");
      rightCol.className = isEven ? "timeline-right" : "timeline-left";

      const card = document.createElement("div");
      card.className = "glass-card timeline-card";
      card.innerHTML = `
        <h4>${item.titulo}</h4>
        <p>${item.resumo}</p>
        <div class="timeline-modal-detail" style="display:none; font-size:0.85rem; border-top:1px dashed var(--border-gold); padding-top:10px; margin-top:10px; text-align:justify;">
          ${item.detalhes}
        </div>
      `;

      // Clique expande os detalhes da timeline
      card.addEventListener("click", () => {
        const details = card.querySelector(".timeline-modal-detail");
        const isOpen = details.style.display === "block";
        
        // Fecha outros detalhes antes de abrir este
        document.querySelectorAll(".timeline-modal-detail").forEach(d => {
          d.style.display = "none";
        });

        if (!isOpen) {
          details.style.display = "block";
          card.style.borderColor = "var(--gold-primary)";
        } else {
          details.style.display = "none";
          card.style.borderColor = "var(--border-gold)";
        }
      });

      rightCol.appendChild(card);

      tItem.appendChild(leftCol);
      tItem.appendChild(rightCol);
      timelineContainer.appendChild(tItem);
    });
  }

  renderTimeline();


  // ==========================================
  // 5. QUIZ COMPETITIVO DA HERESIA (com Ranking)
  // ==========================================
  const quizContainer = document.getElementById("quiz-container");

  // Estado do quiz competitivo
  const QUIZ_TIME = 20; // segundos por pergunta
  const POINTS_PER_CORRECT = 100;
  const POINTS_TIME_BONUS = 50; // bônus máximo por velocidade

  let quizState = {
    playerName: "",
    index: 0,
    score: 0,
    answered: false,
    timerInterval: null,
    timeLeft: QUIZ_TIME,
    startTime: null,
    answers: [], // { correct: bool, timeUsed: number }
  };

  // Ranking persistente na sessão (array de { name, score, correct, total })
  if (!window.quizLeaderboard) window.quizLeaderboard = [];

  // ── TELA 1: REGISTRO ─────────────────────────────────────────────────
  function renderQuizRegistration() {
    if (!quizContainer) return;
    clearTimerInterval();

    const hasPlayers = window.quizLeaderboard.length > 0;
    const rankingPreview = hasPlayers ? `
      <div class="quiz-ranking-preview">
        <div class="quiz-ranking-title">🏆 Ranking Atual</div>
        ${window.quizLeaderboard.slice(0, 5).map((p, i) => `
          <div class="quiz-rank-row">
            <span class="quiz-rank-pos">${['🥇','🥈','🥉','4º','5º'][i]}</span>
            <span class="quiz-rank-name">${escapeHtml(p.name)}</span>
            <span class="quiz-rank-score">${p.score} pts</span>
          </div>
        `).join("")}
      </div>
    ` : "";

    quizContainer.innerHTML = `
      <div class="quiz-registration">
        <div class="quiz-reg-icon">✝️</div>
        <h3 class="quiz-reg-title">Quiz Teológico</h3>
        <p class="quiz-reg-subtitle">Teste seus conhecimentos sobre a Carta aos Colossenses.<br>
          <strong>${DATA.quiz.length} perguntas · ${QUIZ_TIME}s por pergunta · Pontos por velocidade</strong>
        </p>
        <div class="quiz-reg-form">
          <input type="text" id="quiz-player-name" class="quiz-name-input"
            placeholder="Digite seu nome..." maxlength="30" autocomplete="off" />
          <button id="quiz-start-btn" class="quiz-action-btn quiz-start-btn">
            Iniciar Quiz
          </button>
        </div>
        ${rankingPreview}
      </div>
    `;

    const nameInput = document.getElementById("quiz-player-name");
    const startBtn = document.getElementById("quiz-start-btn");

    nameInput.focus();

    const startGame = () => {
      const name = nameInput.value.trim();
      if (!name) {
        nameInput.classList.add("quiz-input-error");
        nameInput.placeholder = "⚠ Digite seu nome para começar!";
        nameInput.focus();
        return;
      }
      nameInput.classList.remove("quiz-input-error");
      quizState = { playerName: name, index: 0, score: 0, answered: false,
                    timerInterval: null, timeLeft: QUIZ_TIME, startTime: null, answers: [] };
      renderQuizQuestion();
    };

    startBtn.addEventListener("click", startGame);
    nameInput.addEventListener("keydown", e => { if (e.key === "Enter") startGame(); });
  }

  // ── TELA 2: PERGUNTA ─────────────────────────────────────────────────
  function renderQuizQuestion() {
    if (!quizContainer) return;
    clearTimerInterval();

    const q = DATA.quiz[quizState.index];
    const progress = ((quizState.index) / DATA.quiz.length) * 100;

    quizContainer.innerHTML = `
      <div class="quiz-header-row">
        <div class="quiz-player-badge">👤 ${escapeHtml(quizState.playerName)}</div>
        <div class="quiz-score-badge">⭐ ${quizState.score} pts</div>
      </div>

      <div class="quiz-progress-info">
        <span>Pergunta ${quizState.index + 1} de ${DATA.quiz.length}</span>
        <span class="quiz-timer-label" id="quiz-timer-label">${QUIZ_TIME}s</span>
      </div>
      <div class="quiz-progress-bar-container">
        <div class="quiz-progress-bar" id="quiz-progress-bar" style="width:${progress}%"></div>
      </div>

      <!-- Timer Arc SVG -->
      <div class="quiz-timer-wrap">
        <svg class="quiz-timer-svg" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="34" class="quiz-timer-track"/>
          <circle cx="40" cy="40" r="34" class="quiz-timer-arc" id="quiz-timer-arc"
            stroke-dasharray="213.6" stroke-dashoffset="0"/>
          <text x="40" y="46" class="quiz-timer-text" id="quiz-timer-text">${QUIZ_TIME}</text>
        </svg>
      </div>

      <div class="quiz-question">${q.pergunta}</div>

      <div class="quiz-options" id="quiz-options">
        ${q.opcoes.map((opt, i) => `
          <button class="quiz-option" data-index="${i}">
            <span class="quiz-opt-letter">${"ABCD"[i]}</span>
            <span class="quiz-opt-text">${opt}</span>
          </button>
        `).join("")}
      </div>

      <div id="quiz-feedback-box" class="quiz-feedback" style="display:none;"></div>
      <button id="quiz-next-btn" class="quiz-action-btn" style="display:none;">
        ${quizState.index + 1 < DATA.quiz.length ? "Próxima Pergunta →" : "Ver Resultado 🏁"}
      </button>
    `;

    // Inicia o timer
    quizState.timeLeft = QUIZ_TIME;
    quizState.startTime = Date.now();
    quizState.answered = false;

    const arc = document.getElementById("quiz-timer-arc");
    const timerText = document.getElementById("quiz-timer-text");
    const timerLabel = document.getElementById("quiz-timer-label");
    const totalArc = 213.6;

    quizState.timerInterval = setInterval(() => {
      quizState.timeLeft--;
      const pct = quizState.timeLeft / QUIZ_TIME;
      if (arc) arc.style.strokeDashoffset = totalArc * (1 - pct);
      if (timerText) timerText.textContent = quizState.timeLeft;
      if (timerLabel) timerLabel.textContent = quizState.timeLeft + "s";

      // Cor muda para vermelho quando < 6s
      if (arc) {
        arc.style.stroke = quizState.timeLeft <= 6
          ? `hsl(${quizState.timeLeft * 10}, 80%, 55%)`
          : "#d4af37";
      }

      if (quizState.timeLeft <= 0) {
        clearTimerInterval();
        handleQuizAnswer(-1); // -1 = tempo esgotado
      }
    }, 1000);

    // Listeners das opções
    const optionBtns = quizContainer.querySelectorAll(".quiz-option");
    optionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (quizState.answered) return;
        const idx = parseInt(btn.getAttribute("data-index"));
        handleQuizAnswer(idx);
      });
    });

    // Listener avançar
    document.getElementById("quiz-next-btn").addEventListener("click", () => {
      quizState.index++;
      if (quizState.index >= DATA.quiz.length) {
        renderQuizResults();
      } else {
        renderQuizQuestion();
      }
    });
  }

  function handleQuizAnswer(selectedIndex) {
    if (quizState.answered) return;
    quizState.answered = true;
    clearTimerInterval();

    const q = DATA.quiz[quizState.index];
    const timeUsed = Math.round((Date.now() - quizState.startTime) / 1000);
    const timeRemaining = Math.max(0, QUIZ_TIME - timeUsed);
    const isCorrect = selectedIndex === q.correta;
    const isTimeout = selectedIndex === -1;

    let pointsEarned = 0;
    if (isCorrect) {
      const bonus = Math.round((timeRemaining / QUIZ_TIME) * POINTS_TIME_BONUS);
      pointsEarned = POINTS_PER_CORRECT + bonus;
      quizState.score += pointsEarned;
    }

    quizState.answers.push({ correct: isCorrect, timeUsed, pointsEarned });

    // Atualiza visual das opções
    const optionBtns = quizContainer.querySelectorAll(".quiz-option");
    optionBtns.forEach(b => {
      b.disabled = true;
      const idx = parseInt(b.getAttribute("data-index"));
      if (idx === q.correta) b.classList.add("correct");
      else if (idx === selectedIndex) b.classList.add("incorrect");
    });

    // Atualiza score badge
    const scoreBadge = quizContainer.querySelector(".quiz-score-badge");
    if (scoreBadge) scoreBadge.textContent = `⭐ ${quizState.score} pts`;

    // Feedback
    const feedbackBox = document.getElementById("quiz-feedback-box");
    if (feedbackBox) {
      feedbackBox.style.display = "block";
      if (isTimeout) {
        feedbackBox.className = "quiz-feedback timeout";
        feedbackBox.innerHTML = `
          <div class="quiz-feedback-title">⏱ Tempo Esgotado!</div>
          <div class="quiz-feedback-text">${q.explicacao}</div>
        `;
      } else if (isCorrect) {
        feedbackBox.className = "quiz-feedback success";
        feedbackBox.innerHTML = `
          <div class="quiz-feedback-title">✅ Correto! +${pointsEarned} pontos ${timeRemaining > 10 ? "⚡ Bônus de velocidade!" : ""}</div>
          <div class="quiz-feedback-text">${q.explicacao}</div>
        `;
      } else {
        feedbackBox.className = "quiz-feedback error";
        feedbackBox.innerHTML = `
          <div class="quiz-feedback-title">❌ Incorreto — 0 pontos</div>
          <div class="quiz-feedback-text">${q.explicacao}</div>
        `;
      }
    }

    const nextBtn = document.getElementById("quiz-next-btn");
    if (nextBtn) nextBtn.style.display = "block";

    // Atualiza barra de progresso
    const bar = document.getElementById("quiz-progress-bar");
    if (bar) bar.style.width = `${((quizState.index + 1) / DATA.quiz.length) * 100}%`;
  }

  // ── TELA 3: RESULTADO + RANKING ────────────────────────────────────
  function renderQuizResults() {
    if (!quizContainer) return;
    clearTimerInterval();

    const totalQ = DATA.quiz.length;
    const correctCount = quizState.answers.filter(a => a.correct).length;
    const rate = correctCount / totalQ;
    const maxScore = totalQ * (POINTS_PER_CORRECT + POINTS_TIME_BONUS);

    // Salva no ranking
    window.quizLeaderboard.push({
      name: quizState.playerName,
      score: quizState.score,
      correct: correctCount,
      total: totalQ,
    });
    // Ordena por pontuação
    window.quizLeaderboard.sort((a, b) => b.score - a.score);

    // Posição do jogador atual
    const playerPos = window.quizLeaderboard.findIndex(
      p => p.name === quizState.playerName && p.score === quizState.score
    ) + 1;

    let medal = "🎖️"; let grade = "";
    if (playerPos === 1) { medal = "🥇"; grade = "Líder do Ranking!"; }
    else if (playerPos === 2) { medal = "🥈"; grade = "Vice-Campeão!"; }
    else if (playerPos === 3) { medal = "🥉"; grade = "3º Lugar!"; }
    else if (rate >= 0.75) { grade = "Muito Bom!"; }
    else { grade = "Continue Estudando!"; }

    let desc = "";
    if (rate === 1) desc = "Perfeito! Você dominou completamente os ensinamentos da epístola.";
    else if (rate >= 0.75) desc = "Ótimo desempenho! Você compreendeu bem a centralidade de Cristo na carta.";
    else if (rate >= 0.5) desc = "Bom esforço! Revise o contexto histórico e o hino cristológico para melhorar.";
    else desc = "Não desanime! A carta aos Colossenses tem ensinamentos ricos. Tente novamente!";

    // Gera confetti se acertou >= 75%
    if (rate >= 0.75) launchConfetti();

    const rankingHTML = window.quizLeaderboard.slice(0, 8).map((p, i) => {
      const isCurrentPlayer = p.name === quizState.playerName && p.score === quizState.score && i === playerPos - 1;
      const medals = ["🥇","🥈","🥉"];
      const pos = medals[i] || `${i+1}º`;
      return `
        <div class="quiz-rank-row ${isCurrentPlayer ? "quiz-rank-row--current" : ""}">
          <span class="quiz-rank-pos">${pos}</span>
          <span class="quiz-rank-name">${escapeHtml(p.name)}</span>
          <span class="quiz-rank-correct">${p.correct}/${p.total}</span>
          <span class="quiz-rank-score">${p.score} pts</span>
        </div>
      `;
    }).join("");

    quizContainer.innerHTML = `
      <div class="quiz-result-card">
        <div class="quiz-result-medal">${medal}</div>
        <div class="quiz-result-name">${escapeHtml(quizState.playerName)}</div>
        <div class="quiz-result-score-big">${quizState.score} <span>pts</span></div>
        <div class="quiz-result-stats">
          <div class="quiz-stat-item">
            <span class="quiz-stat-val">${correctCount}/${totalQ}</span>
            <span class="quiz-stat-label">Acertos</span>
          </div>
          <div class="quiz-stat-item">
            <span class="quiz-stat-val">${Math.round((quizState.score / maxScore) * 100)}%</span>
            <span class="quiz-stat-label">Eficiência</span>
          </div>
          <div class="quiz-stat-item">
            <span class="quiz-stat-val">${playerPos}º</span>
            <span class="quiz-stat-label">Colocação</span>
          </div>
        </div>
        <div class="quiz-result-grade">${grade}</div>
        <p class="quiz-result-text">${desc}</p>
      </div>

      <div class="quiz-leaderboard">
        <div class="quiz-leaderboard-title">🏆 Placar Geral</div>
        <div class="quiz-leaderboard-list">${rankingHTML}</div>
      </div>

      <div class="quiz-result-actions">
        <button id="quiz-restart-btn" class="quiz-action-btn">🔄 Jogar Novamente</button>
        <button id="quiz-new-player-btn" class="quiz-action-btn quiz-action-btn--secondary">👤 Novo Participante</button>
      </div>
    `;

    if (typeof lucide !== "undefined") lucide.createIcons();

    document.getElementById("quiz-restart-btn").addEventListener("click", () => {
      quizState.index = 0; quizState.score = 0; quizState.answers = [];
      renderQuizQuestion();
    });
    document.getElementById("quiz-new-player-btn").addEventListener("click", () => {
      renderQuizRegistration();
    });
  }

  // ── HELPERS ──────────────────────────────────────────────────────────
  function clearTimerInterval() {
    if (quizState.timerInterval) {
      clearInterval(quizState.timerInterval);
      quizState.timerInterval = null;
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }

  function launchConfetti() {
    const colors = ["#d4af37","#f3e5ab","#ffbf00","#ffffff","#ff6b6b"];
    for (let i = 0; i < 80; i++) {
      const el = document.createElement("div");
      el.style.cssText = `
        position:fixed; top:-10px;
        left:${Math.random()*100}vw;
        width:${6+Math.random()*8}px; height:${6+Math.random()*8}px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        border-radius:${Math.random()>0.5?"50%":"2px"};
        animation: confetti-fall ${1.5+Math.random()*2}s ease-in forwards;
        animation-delay:${Math.random()*0.8}s;
        z-index:9999; pointer-events:none;
        transform:rotate(${Math.random()*360}deg);
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }
  }

  // Inicia na tela de registro
  renderQuizRegistration();


  // ==========================================
  // 6. EXPLORADOR DO HINO CRISTOLÓGICO
  // ==========================================
  const hinoVerseList = document.getElementById("hino-verse-list");
  const hinoExegesisContainer = document.getElementById("hino-exegesis-container");

  function renderHino() {
    if (!hinoVerseList) return;
    hinoVerseList.innerHTML = "";

    DATA.hino.forEach((item, index) => {
      const verseCard = document.createElement("div");
      verseCard.className = "hino-verse-card";
      if (index === 0) verseCard.classList.add("active");

      verseCard.innerHTML = `
        <div class="hino-verse-text">"${item.verso}"</div>
      `;

      verseCard.addEventListener("click", () => {
        // Remove active de todos
        hinoVerseList.querySelectorAll(".hino-verse-card").forEach(c => c.classList.remove("active"));
        // Adiciona active no clicado
        verseCard.classList.add("active");

        renderExegesis(item, index + 15);
      });

      hinoVerseList.appendChild(verseCard);
    });
  }

  function renderExegesis(item, number) {
    if (!hinoExegesisContainer) return;
    
    hinoExegesisContainer.innerHTML = `
      <div class="exegesis-card-content">
        <span class="biblical-ref-tag exegesis-verse-ref">Colossenses 1:${number}</span>
        <h3>Análise Exegética</h3>
        <div class="exegesis-text" style="text-align: justify; line-height: 1.6;">
          ${item.exegese}
        </div>
      </div>
    `;
  }

  renderHino();


  // ==========================================
  // 7. MATRIZ DE CONEXÕES ECLESIAIS (APLICAÇÕES)
  // ==========================================
  const matrixContainer = document.getElementById("matrix-container");
  const filterBtns = document.querySelectorAll("#category-filter-bar .filter-btn");

  function renderMatrix(filterCategory = "all") {
    if (!matrixContainer) return;
    matrixContainer.innerHTML = "";

    const items = filterCategory === "all" 
      ? DATA.matriz 
      : DATA.matriz.filter(m => m.categoria === filterCategory);

    items.forEach(item => {
      const card = document.createElement("div");
      card.className = "glass-card matrix-card";
      card.innerHTML = `
        <div class="matrix-card-header">
          <h3>${item.categoria}</h3>
          <i data-lucide="help-circle" style="color: var(--border-gold-hover);"></i>
        </div>
        
        <div class="matrix-body-row">
          <span class="matrix-row-label">Problema em Colossos</span>
          <p class="matrix-row-content">${item.problemaColossos}</p>
        </div>
        
        <div class="matrix-body-row">
          <span class="matrix-row-label">Equivalente Contemporâneo</span>
          <p class="matrix-row-content modern">${item.equivalenteModerno}</p>
        </div>
        
        <div class="matrix-body-row">
          <span class="matrix-row-label">Solução Bíblica na Epístola</span>
          <p class="matrix-row-content solution">${item.solucaoCarta}</p>
        </div>
        
        <div class="matrix-card-footer">
          <span class="biblical-ref-tag" style="font-size:0.75rem; padding: 3px 8px;">
            ${item.versiculo}
          </span>
        </div>
      `;

      matrixContainer.appendChild(card);
    });

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filterValue = btn.getAttribute("data-filter");
      renderMatrix(filterValue);
    });
  });

  renderMatrix();


  // ==========================================
  // 8. APRESENTAÇÃO DA EQUIPE
  // ==========================================
  const teamContainer = document.getElementById("team-container");

  function renderTeam() {
    if (!teamContainer) return;
    teamContainer.innerHTML = "";

    DATA.grupo.forEach(membro => {
      const card = document.createElement("div");
      card.className = "glass-card team-member-card";
      card.innerHTML = `
        <div class="member-avatar">${membro.avatar}</div>
        <div class="member-name">${membro.nome}</div>
        <div class="member-role">${membro.funcao}</div>
      `;
      teamContainer.appendChild(card);
    });
  }

  renderTeam();
});
