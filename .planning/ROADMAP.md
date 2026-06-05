# Roteiro de Desenvolvimento (Roadmap) - Painel Interativo de Colossenses

Este documento descreve as fases de desenvolvimento para a implementação do painel interativo da Carta aos Colossenses.

## Resumo das Fases

| Fase | Título | Objetivo | Requisitos Mapeados | Modo | Status |
|------|--------|----------|----------------------|------|--------|
| 1 | Fundamentos e Contexto Histórico | Criar a base da SPA, o design system (Dark Gold) e componentes de contexto (Galeria, Mapa e Linha do Tempo) | REQ-HIST-01, REQ-MAP-01, REQ-TIME-01 | mvp | Planejado |
| 2 | Teologia, Heresias e Aplicação | Implementar os recursos interativos de teologia (Quiz de Heresias, Hino Cristológico e Matriz Eclesiológica) | REQ-THEO-01, REQ-THEO-02, REQ-ECCL-01 | mvp | Planejado |
| 3 | Painel do Grupo e Refinamento Estético | Criar a tela de integrantes do seminário, polir animações, transições e garantir a responsividade | REQ-TEAM-01 | mvp | Planejado |

---

### Fase 1: Fundamentos e Contexto Histórico
**Goal:** Criar o invólucro do painel interativo, aplicar o design system Dark Gold/Amber de alto padrão e implementar as seções de curiosidades históricas de Colossos, o mapa regional interativo do Vale do Lico e a linha do tempo do envio da carta.
**Mode:** mvp
**Success Criteria:**
1. A estrutura Single Page Application (SPA) renderiza corretamente no navegador com fontes modernas, layout responsivo e transições suaves de navegação.
2. A galeria de curiosidades históricas/arqueológicas exibe pelo menos 4 tópicos com suporte a modais interativos para detalhamento.
3. O mapa interativo em SVG renderiza Colossos, Laodicéia e Hierápolis, exibindo caixas de informações geográficas e conexões bíblicas ao passar o mouse ou clicar.
4. A linha do tempo cronológica do envio da carta funciona, permitindo navegar interativamente pelas etapas da prisão de Paulo até a entrega física por Tíquico e Onésimo.

### Fase 2: Teologia, Heresias e Aplicação
**Goal:** Desenvolver as seções teológicas do painel, contendo o diagnosticador de heresias de Colossos, o explorador detalhado do hino cristológico (Col 1:15-20) e a matriz de aplicação prática contemporânea.
**Mode:** mvp
**Success Criteria:**
1. O diagnosticador/quiz de heresias permite selecionar os desvios de Colossos (legalismo, ascetismo, culto a anjos, gnosticismo) e exibe as respectivas refutações teológicas escritas por Paulo.
2. O explorador de versículos decompõe o hino de Col 1:15-20 em blocos estruturados que exibem análises exegéticas detalhadas ao serem clicados.
3. A matriz de conexões eclesiológicas apresenta de forma visual e filtrável as pontes entre os erros históricos e as disfunções da igreja atual, apontando as soluções na carta.

### Fase 3: Painel do Grupo e Refinamento Estético
**Goal:** Finalizar a tela de apresentação do grupo do seminário, polir a identidade visual do painel com micro-animações douradas e glassmorphism refinado, e realizar testes funcionais finais.
**Mode:** mvp
**Success Criteria:**
1. A aba do grupo de seminário exibe com elegância o nome, cargo/atribuição e um avatar ilustrativo para cada um dos integrantes (até 7 pessoas).
2. O acabamento estético conta com gradientes dourados suaves, efeito de vidro fosco (glassmorphism) nos cards, hover states interativos em todos os botões e responsividade impecável em celulares, tablets e projetores de seminário.
3. O projeto é testado e verificado sem erros de console ou formatação de tela.

---

## Rastreabilidade de Requisitos (Traceability)

- **REQ-HIST-01** (Curiosidades Arqueológicas) -> Fase 1
- **REQ-MAP-01** (Mapa Interativo) -> Fase 1
- **REQ-TIME-01** (Linha do Tempo) -> Fase 1
- **REQ-THEO-01** (Quiz Heresia Colossense) -> Fase 2
- **REQ-THEO-02** (Explorador Cristológico) -> Fase 2
- **REQ-ECCL-01** (Matriz de Aplicações) -> Fase 2
- **REQ-TEAM-01** (Apresentação do Grupo) -> Fase 3

---
*Last updated: 2026-06-05 after roadmap creation*
