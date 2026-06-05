# Roadmap: Painel Interativo de Colossenses

## Overview

Este roteiro descreve as fases de desenvolvimento para a implementação do painel interativo da Carta aos Colossenses.

## Phases

- [ ] **Phase 1: Foundation and Historical Context** - Criar a base da SPA, o design system (Dark Gold) e componentes de contexto (Galeria, Mapa e Linha do Tempo)
- [ ] **Phase 2: Theology, Heresies, and Application** - Implementar os recursos interativos de teologia (Quiz de Heresias, Hino Cristológico e Matriz Eclesiológica)
- [ ] **Phase 3: Group Panel and Aesthetic Polish** - Criar a tela de integrantes do seminário, polir animações, transições e garantir a responsividade

## Phase Details

### Phase 1: Foundation and Historical Context
**Goal**: Criar o invólucro do painel interativo, aplicar o design system Dark Gold/Amber de alto padrão e implementar as seções de curiosidades históricas de Colossos, o mapa regional interativo do Vale do Lico e a linha do tempo do envio da carta.
**Depends on**: Nothing (first phase)
**Requirements**: [REQ-HIST-01, REQ-MAP-01, REQ-TIME-01]
**Success Criteria** (what must be TRUE):
  1. A estrutura Single Page Application (SPA) renderiza corretamente no navegador com fontes modernas, layout responsivo e transições suaves de navegação.
  2. A galeria de curiosidades históricas/arqueológicas exibe pelo menos 4 tópicos com suporte a modais interativos para detalhamento.
  3. O mapa interativo em SVG renderiza Colossos, Laodicéia e Hierápolis, exibindo caixas de informações geográficas e conexões bíblicas ao passar o mouse ou clicar.
  4. A linha do tempo cronológica do envio da carta funciona, permitindo navegar interativamente pelas etapas da prisão de Paulo até a entrega física por Tíquico e Onésimo.
**Plans**: 1 plan

Plans:
- [ ] 01-01: Implementar layout base da SPA, galeria de curiosidades, mapa interativo em SVG e linha do tempo cronológica.

### Phase 2: Theology, Heresies, and Application
**Goal**: Desenvolver as seções teológicas do painel, contendo o diagnosticador de heresias de Colossos, o explorador detalhado do hino cristológico (Col 1:15-20) e a matriz de aplicação prática contemporânea.
**Depends on**: Phase 1
**Requirements**: [REQ-THEO-01, REQ-THEO-02, REQ-ECCL-01]
**Success Criteria** (what must be TRUE):
  1. O diagnosticador/quiz de heresias permite selecionar os desvios de Colossos (legalismo, ascetismo, culto a anjos, gnosticismo) e exibe as respectivas refutações teológicas escritas por Paulo.
  2. O explorador de versículos decompõe o hino de Col 1:15-20 em blocos estruturados que exibem análises exegéticas detalhadas ao serem clicados.
  3. A matriz de conexões eclesiológicas apresenta de forma visual e filtrável as pontes entre os erros históricos e as disfunções da igreja atual, apontando as soluções na carta.
**Plans**: 1 plan

Plans:
- [ ] 02-01: Implementar Quiz das Heresias, Explorador do Hino Cristológico e a Matriz Eclesiológica de Aplicação Prática.

### Phase 3: Group Panel and Aesthetic Polish
**Goal**: Finalizar a tela de apresentação do grupo do seminário, polir a identidade visual do painel com micro-animações douradas e glassmorphism refinado, e realizar testes funcionais finais.
**Depends on**: Phase 2
**Requirements**: [REQ-TEAM-01]
**Success Criteria** (what must be TRUE):
  1. A aba do grupo de seminário exibe com elegância o nome, cargo/atribuição e um avatar ilustrativo para cada um dos integrantes (até 7 pessoas).
  2. O acabamento estético conta com gradientes dourados suaves, efeito de vidro fosco (glassmorphism) nos cards, hover states interativos em todos os botões e responsividade impecável em celulares, tablets e projetores de seminário.
  3. O projeto é testado e verificado sem erros de console ou formatação de tela.
**Plans**: 1 plan

Plans:
- [ ] 03-01: Implementar painel do grupo de seminário, responsividade mobile/tablet e polimento visual final.

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation and Historical Context | 0/1 | Not started | - |
| 2. Theology, Heresies, and Application | 0/1 | Not started | - |
| 3. Group Panel and Aesthetic Polish | 0/1 | Not started | - |
