# Painel Interativo - Carta aos Colossenses

Painel interativo e dinâmico sobre a Epístola aos Colossenses para apresentação em seminário teológico. O projeto explora a teologia, a eclesiologia, o contexto histórico-arqueológico da antiga cidade de Colossos, a heresia colossense e suas conexões com problemas eclesiásticos contemporâneos, propondo soluções com base na própria carta.

## Core Value
Apresentar de forma visualmente deslumbrante, interativa e teologicamente profunda os ensinamentos da Carta aos Colossenses, conectando o contexto histórico do século I com os desafios práticos da igreja do século XXI.

## Tech Stack
- **Core:** HTML5, CSS3 (Vanilla com design premium, animações fluidas e tema Dark Gold/Amber), JavaScript (ES6+ para interatividade).
- **Assets:** Imagens históricas/arqueológicas geradas, mapas interativos em SVG/Canvas e tipografia moderna (Google Fonts: Outfit e Inter).

## Requirements

### Validated
*(Nenhum ainda - projeto em inicialização)*

### Active
- [ ] **REQ-HIST-01**: Galeria de curiosidades arqueológicas e históricas sobre a cidade de Colossos.
- [ ] **REQ-MAP-01**: Mapa arqueológico/geográfico interativo da região do Vale do Lico (Colossos, Laodicéia, Hierápolis).
- [ ] **REQ-THEO-01**: Identificador/Quiz interativo sobre a "Heresia Colossense" (gnosticismo, legalismo, ascetismo).
- [ ] **REQ-THEO-02**: Explorador interativo de versículos-chave (como o hino cristológico de Colossenses 1:15-20).
- [ ] **REQ-ECCL-01**: Painel de aplicação eclesiástica conectando problemas da igreja do século I a problemas atuais com soluções baseadas na carta.
- [ ] **REQ-TIME-01**: Linha do tempo interativa do contexto de escrita da carta (Paulo na prisão em Roma, envio por Tíquico/Onésimo).
- [ ] **REQ-TEAM-01**: Tela de apresentação do grupo do seminário (suporte para até 7 membros).

### Out of Scope
- Backend dinâmico com banco de dados persistente (o painel será uma Single Page Application estática e interativa com estado em memória).
- Autenticação de usuário (acesso livre para a apresentação no seminário).

## Key Decisions

| Decisão | Racional | Resultado |
|----------|-----------|-----------|
| **Tema Dark Gold/Amber** | Traz uma estética premium, solene e teológica, combinando com manuscritos antigos sob uma roupagem moderna. | Confirmado pelo usuário |
| **Design Single Page App** | Garante transições fluidas sem recarregamento de página durante a apresentação do seminário. | Confirmado |
| **Vanilla CSS & JS** | Evita dependências desnecessárias, simplifica o deploy local e maximiza a performance de renderização. | Confirmado |

## Evolution

Este documento evolui nas transições de fase e marcos.

**Após cada transição de fase:**
1. Requisitos invalidados? → Mover para Out of Scope com justificativa.
2. Requisitos validados? → Mover para Validated com referência à fase.
3. Novos requisitos surgiram? → Adicionar a Active.
4. Decisões para registrar? → Adicionar a Key Decisions.
5. "What This Is" ainda está preciso? → Atualizar se houver desvio.

**Após cada marco (milestone):**
1. Revisão completa de todas as seções.
2. Verificação do Core Value - continua sendo a prioridade correta?
3. Auditar Out of Scope - motivos ainda são válidos?
4. Atualizar Contexto com o estado atual.

---
*Last updated: 2026-06-05 after initialization*
