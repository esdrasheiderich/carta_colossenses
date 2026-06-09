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
    if (tabId === "inicio") {
      triggerInicioReveal();
      animateStats();
    } else if (tabId === "mapa") {
      const defaultPin = document.getElementById("pin-colossos");
      if (defaultPin) {
        defaultPin.dispatchEvent(new Event("click"));
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

  // Variáveis de Zoom e Pan do Mapa
  let zoomLevel = 1.0;
  let panX = 0;
  let panY = 0;
  let isPanning = false;
  let startX = 0;
  let startY = 0;
  let hasDragged = false;

  const zoomGroup = document.getElementById("map-zoom-group");
  const svgElement = document.querySelector(".map-svg");

  function updateMapTransform() {
    if (!zoomGroup) return;
    
    // Limita o pan para não arrastar o mapa fora da tela visível (viewBox 0 0 900 550)
    if (zoomLevel === 1.0) {
      panX = 0;
      panY = 0;
    } else {
      const minPanX = 900 * (1 - zoomLevel);
      const minPanY = 550 * (1 - zoomLevel);
      panX = Math.max(minPanX, Math.min(0, panX));
      panY = Math.max(minPanY, Math.min(0, panY));
    }
    
    zoomGroup.setAttribute("transform", `translate(${panX}, ${panY}) scale(${zoomLevel})`);
  }

  mapCityGroups.forEach(group => {
    group.addEventListener("click", (e) => {
      // Ignora clique se houve arrasto
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

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

  // Botões de controle de zoom flutuantes
  const btnZoomIn = document.getElementById("btn-zoom-in");
  const btnZoomOut = document.getElementById("btn-zoom-out");
  const btnZoomReset = document.getElementById("btn-zoom-reset");

  if (btnZoomIn) {
    btnZoomIn.addEventListener("click", () => {
      zoomLevel = Math.min(3.0, zoomLevel + 0.25);
      updateMapTransform();
    });
  }

  if (btnZoomOut) {
    btnZoomOut.addEventListener("click", () => {
      zoomLevel = Math.max(1.0, zoomLevel - 0.25);
      updateMapTransform();
    });
  }

  if (btnZoomReset) {
    btnZoomReset.addEventListener("click", () => {
      zoomLevel = 1.0;
      panX = 0;
      panY = 0;
      updateMapTransform();
    });
  }

  // Interações direta de mouse (Wheel Zoom + Drag to Pan)
  if (svgElement) {
    svgElement.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomFactor = 0.15;
      if (e.deltaY < 0) {
        zoomLevel = Math.min(3.0, zoomLevel + zoomFactor);
      } else {
        zoomLevel = Math.max(1.0, zoomLevel - zoomFactor);
      }
      updateMapTransform();
    }, { passive: false });

    svgElement.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return; // Apenas clique esquerdo
      isPanning = true;
      hasDragged = false;
      svgElement.classList.add("is-dragging");
      startX = e.clientX - panX;
      startY = e.clientY - panY;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isPanning) return;
      
      const newPanX = e.clientX - startX;
      const newPanY = e.clientY - startY;

      // Se mover mais de 5 pixels, considera-se arrastado (previne clique ao soltar)
      if (Math.abs(newPanX - panX) > 5 || Math.abs(newPanY - panY) > 5) {
        hasDragged = true;
      }

      panX = newPanX;
      panY = newPanY;
      updateMapTransform();
    });

    window.addEventListener("mouseup", () => {
      if (!isPanning) return;
      isPanning = false;
      svgElement.classList.remove("is-dragging");
      
      // Delay minúsculo para prevenir disparar cliques das cidades
      setTimeout(() => {
        hasDragged = false;
      }, 50);
    });
  }

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
  // 5. LABORATÓRIO DE APOLOGÉTICA (DASHBOARD)
  // ==========================================
  const quizContainer = document.getElementById("quiz-container");

  const heresyDescriptions = {
    "Legalismo Judaico": "Imposição de ordenanças rituais e leis cerimoniais judaicas (comida, bebida, festividades, sábados) como requisitos para a salvação e santidade.",
    "Misticismo & Culto a Anjos": "Prática de veneração a seres intermediários e obsessão por experiências espirituais e visões místicas superiores.",
    "Ascetismo Rígido": "Autoprivação extrema, castigo do corpo físico e negação de necessidades humanas básicas sob a falsa premissa de alcançar purificação espiritual.",
    "Filosofias Pagãs (Gnosticismo)": "Sincretismo intelectual grego-helenístico que rejeitava a realidade física e negava a encarnação perfeita e corporal de Cristo."
  };

  let activeCaseIndex = 0;
  let revealedStates = Array.from({ length: DATA.casosApologeticos.length }, () => ({
    diagnosis: false,
    antidote: false
  }));

  function renderDashboard() {
    if (!quizContainer) return;

    const currentCase = DATA.casosApologeticos[activeCaseIndex];
    const isDiagnosisRevealed = revealedStates[activeCaseIndex].diagnosis;
    const isAntidoteRevealed = revealedStates[activeCaseIndex].antidote;

    // 1. Gerar Abas Selector
    let tabsHtml = "";
    DATA.casosApologeticos.forEach((c, idx) => {
      const isActive = idx === activeCaseIndex ? "active" : "";
      tabsHtml += `
        <button class="lab-case-tab ${isActive}" data-case-index="${idx}">
          <span>${c.avatar}</span>
          <span>${c.membro.split(" ")[0]}</span>
        </button>
      `;
    });

    // 2. Gerar Card do Diagnóstico (Locked/Unlocked)
    let diagnosisHtml = "";
    if (isDiagnosisRevealed) {
      diagnosisHtml = `
        <div class="unlocked-content">
          <div class="unlocked-header">
            <i data-lucide="search"></i>
            <h4>Diagnóstico da Heresia</h4>
          </div>
          <div class="unlocked-body">
            <strong>${currentCase.heresiaCorreta}</strong>
            <p>${heresyDescriptions[currentCase.heresiaCorreta] || ""}</p>
          </div>
        </div>
      `;
    } else {
      diagnosisHtml = `
        <div class="seal-icon">🔍</div>
        <div class="reveal-title">Revelar Diagnóstico</div>
        <div class="reveal-subtitle">Clique para identificar a heresia do caso</div>
      `;
    }

    // 3. Gerar Card do Antídoto (Locked/Unlocked)
    let antidoteHtml = "";
    if (isAntidoteRevealed) {
      antidoteHtml = `
        <div class="unlocked-content">
          <div class="unlocked-header">
            <i data-lucide="shield"></i>
            <h4>Antídoto Bíblico</h4>
          </div>
          <div class="unlocked-body">
            <strong>${currentCase.passagemCorreta}</strong>
            <p style="text-align: justify;">${currentCase.explicacao}</p>
          </div>
        </div>
      `;
    } else {
      antidoteHtml = `
        <div class="seal-icon">🛡️</div>
        <div class="reveal-title">Revelar Antídoto</div>
        <div class="reveal-subtitle">Clique para prescrever a refutação de Paulo</div>
      `;
    }

    quizContainer.innerHTML = `
      <div class="lab-case-selector">
        ${tabsHtml}
      </div>

      <div class="lab-parchment" id="lab-parchment-container">
        <div class="lab-parchment-header">
          <span class="lab-parchment-avatar">${currentCase.avatar}</span>
          <span class="lab-parchment-author">${currentCase.membro}</span>
        </div>
        <div class="lab-parchment-letter">"${currentCase.relato}"</div>
      </div>

      <div class="reveal-cards-grid">
        <div class="reveal-card ${isDiagnosisRevealed ? 'unlocked' : 'locked'} diagnosis-card" id="diagnosis-reveal-card">
          ${diagnosisHtml}
        </div>
        <div class="reveal-card ${isAntidoteRevealed ? 'unlocked' : 'locked'} antidote-card" id="antidote-reveal-card">
          ${antidoteHtml}
        </div>
      </div>
    `;

    // Inicializa ícones do Lucide após renderizar
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    // Bind Event Listeners
    // A) Case Tabs Selector
    const tabs = quizContainer.querySelectorAll(".lab-case-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const idx = parseInt(tab.getAttribute("data-case-index"));
        activeCaseIndex = idx;
        renderDashboard();
      });
    });

    // B) Click to Reveal Diagnosis
    const diagCard = document.getElementById("diagnosis-reveal-card");
    if (diagCard && !isDiagnosisRevealed) {
      diagCard.addEventListener("click", () => {
        revealedStates[activeCaseIndex].diagnosis = true;
        renderDashboard();
        // Efeito visual no papiro
        const pContainer = document.getElementById("lab-parchment-container");
        if (pContainer) pContainer.classList.add("heal-success-flash");
      });
    }

    // C) Click to Reveal Antidote
    const antiCard = document.getElementById("antidote-reveal-card");
    if (antiCard && !isAntidoteRevealed) {
      antiCard.addEventListener("click", () => {
        revealedStates[activeCaseIndex].antidote = true;
        renderDashboard();
        // Efeito visual no papiro
        const pContainer = document.getElementById("lab-parchment-container");
        if (pContainer) pContainer.classList.add("heal-success-flash");
      });
    }
  }

  // Inicializa o Painel de Diagnóstico
  renderDashboard();


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

        renderExegesis(item, item.versiculo);
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

  function renderMatrix() {
    if (!matrixContainer) return;
    matrixContainer.innerHTML = "";

    DATA.matriz.forEach(item => {
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

  // ==========================================
  // 9. DINAMIZAÇÃO DA PÁGINA INICIAL (INÍCIO)
  // ==========================================
  function triggerInicioReveal() {
    const revealItems = document.querySelectorAll("#tab-inicio .reveal-item");
    revealItems.forEach(item => {
      item.classList.remove("revealed");
      void item.offsetWidth; // Force reflow
      item.classList.add("revealed");
    });
  }

  function animateStats() {
    const statNums = document.querySelectorAll("#tab-inicio .stat-num");
    statNums.forEach(stat => {
      const target = parseInt(stat.getAttribute("data-target"), 10);
      if (isNaN(target)) return;

      stat.textContent = "0";
      
      const duration = 1200; // ms
      const startTime = performance.now();
      
      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing out cubic: f(t) = 1 - (1-t)^3
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeProgress * target);
        
        stat.textContent = currentValue;
        
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          stat.textContent = target;
        }
      }
      
      setTimeout(() => {
        requestAnimationFrame(update);
      }, 300);
    });
  }

  function init3DTilt() {
    const cards = document.querySelectorAll(".feature-card");
    
    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const w = rect.width;
        const h = rect.height;
        const dx = (x / w) - 0.5;
        const dy = (y / h) - 0.5;
        
        const maxRot = 10; 
        const rx = -dy * maxRot;
        const ry = dx * maxRot;
        
        card.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
        card.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
        card.style.setProperty("--mx", `${x}px`);
        card.style.setProperty("--my", `${y}px`);
        
        card.style.transition = "border-color 0.35s ease, box-shadow 0.35s ease, transform 0.05s ease";
      });
      
      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
        card.style.transition = "border-color 0.35s ease, box-shadow 0.35s ease, transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
      });
      
      card.addEventListener("mouseenter", () => {
        card.style.transition = "border-color 0.35s ease, box-shadow 0.35s ease, transform 0.15s ease";
      });
    });
  }

  // Inicializa os efeitos da página inicial
  triggerInicioReveal();
  animateStats();
  init3DTilt();

  // Vídeo de fundo
  const bgVideo = document.getElementById("bg-video");
  if (bgVideo) {
    bgVideo.src = "assets/Colossos.mp4";
    bgVideo.load();
    bgVideo.play().catch(e => console.log("Autoplay do vídeo bloqueado pelo navegador:", e));
  }
});
