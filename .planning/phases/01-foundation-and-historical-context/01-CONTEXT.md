# Phase 1: Foundation and Historical Context - Context

**Gathered:** 2026-06-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Criar o invólucro do painel interativo, aplicar o design system Dark Gold/Amber de alto padrão e implementar as seções de curiosidades históricas de Colossos, o mapa regional interativo do Vale do Lico e a linha do tempo do envio da carta.

</domain>

<decisions>
## Implementation Decisions

### Design System e Paleta de Cores
- **D-01:** Paleta baseada em fundo escuro premium (Dark Mode) usando `#121212` e `#1a1a1a` como cores principais de fundo.
- **D-02:** Tons metálicos de ouro (`#d4af37`, `#ffdf00`) e âmbar (`#ffbf00`, `#ff9f00`) para realces (glows, bordas de cards ativos, textos em destaque).
- **D-03:** Uso de fontes Google Fonts: "Outfit" para cabeçalhos (estilo moderno e refinado) e "Inter" para textos gerais de leitura.
- **D-04:** Cards e modais estilizados com glassmorphism (efeito vidro fosco usando `backdrop-filter: blur(12px)` e fundos translúcidos `rgba(30, 30, 30, 0.6)`).

### Layout e Navegação
- **D-05:** Estrutura Single Page Application (SPA). A navegação ocorre sem recarregamento de página, trocando as visualizações por meio de JavaScript vanilla baseado em eventos de clique nos menus.
- **D-06:** Sidebar fixa lateral para telas grandes (computadores/projetor do seminário) e barra de navegação inferior/hamburguer para telas pequenas (responsivo).

### Curiosidades Arqueológicas (REQ-HIST-01)
- **D-07:** Grade contendo 4 cartões com imagens e fatos rápidos sobre Colossos (lã/tintura, sismicidade de 60/61 d.C., monte não escavado e relevância histórica).
- **D-08:** Clique nos cartões abre modais sobrepostos com animação suave de zoom e desfoque do fundo.

### Mapa Interativo (REQ-MAP-01)
- **D-09:** Renderização de um mapa do Vale do Lico usando SVG vetorial incorporado direto no HTML para garantir escalabilidade e nitidez.
- **D-10:** Marcações interativas para Colossos, Laodicéia e Hierápolis. Passar o mouse exibe um mini-tooltip, e clicar abre os detalhes detalhados em um painel adjacente no mapa.

### Linha do Tempo (REQ-TIME-01)
- **D-11:** Linha do tempo vertical interativa representando a cronologia de produção e envio da epístola (Prisão de Paulo em Roma -> Redação -> Visita de Epafras -> Viagem de Tíquico/Onésimo).

### the agent's Discretion
- Escolha da biblioteca de ícones (como Lucide Icons via CDN ou SVGs inline).
- Curadoria final dos dados arqueológicos e dos textos das curiosidades.
- Design exato da animação de loading e efeitos de hover (efeito hover com brilho dourado e escala).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

- `.planning/PROJECT.md` — Visão geral e metas do projeto.
- `.planning/REQUIREMENTS.md` — Especificação de requisitos funcionais e critérios de aceitação.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Nenhuma base de código pré-existente (Greenfield).

### Established Patterns
- Padrão moderno de SPA estática e componentização por seções `<section class="tab-content">` ocultas/exibidas via JavaScript.

</code_context>

<deferred>
## Deferred Ideas

- Diagnosticador de heresias de Colossos (Fase 2).
- Explorador do Hino Cristológico (Fase 2).
- Matriz de conexões eclesiológicas e problemas modernos (Fase 2).
- Painel de integrantes do seminário (Fase 3).

</deferred>

---

*Phase: 01-foundation-and-historical-context*
*Context gathered: 2026-06-05*
