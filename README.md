# Carta aos Colossenses | Painel Interativo

Painel interativo e teológico sobre a Epístola do Apóstolo Paulo aos Colossenses, desenvolvido para o STBLM 2026.

## Funcionalidades

- **Início** — Visão geral com estatísticas da carta (4 capítulos, 95 versículos, ~62 d.C.)
- **Contexto Histórico** — Arqueologia e curiosidades sobre a antiga cidade de Colossos e o Vale do Lico
- **Mapa Interativo** — Mapa com Leaflet mostrando a relação geográfica entre Colossos, Laodicéia e Hierápolis
- **Linha do Tempo** — Cronologia dos eventos históricos e teológicos
- **Heresia & Quiz** — Quiz teológico competitivo sobre a Heresia Colossense
- **Hino Cristológico** — Análise exegética versículo por versículo de Colossenses 1:15-20
- **Aplicações Eclesiais** — Paralelos entre a heresia do século I e desafios contemporâneos da igreja
- **Membros da Equipe** — Informações sobre os membros do projeto

## Tecnologias

- HTML5, CSS3, JavaScript (vanilla)
- [Leaflet](https://leafletjs.com/) — Mapas interativos
- [Lucide Icons](https://lucide.dev/) — Ícones

## Como Executar

Basta abrir o arquivo `index.html` diretamente no navegador (duplo-clique).

## Deploy Gratuito

### GitHub Pages
1. Crie um repositório no GitHub
2. Faça push do projeto
3. Em **Settings > Pages**, selecione a branch `main`
4. Acesse `https://seu-usuario.github.io/nome-repo/`

### Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto na área de deploy

## Estrutura do Projeto

```
carta_colossenses/
├── index.html      # Página principal
├── index.css       # Estilos
├── index.js        # Lógica principal
├── data.js         # Dados do quiz, hino, matriz de aplicação e equipe
├── map.js          # Configuração do mapa Leaflet
├── assets/         # Imagens e recursos
└── README.md
```

## Créditos

Projeto desenvolvido por equipe do STBLM 2026.
