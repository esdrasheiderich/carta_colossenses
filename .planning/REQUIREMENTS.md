# Requisitos do Projeto - Painel Interativo de Colossenses

Este documento detalha os requisitos da versão v1 para o painel interativo da Carta aos Colossenses.

## User Stories

- **Como aluno do seminário / apresentador do grupo**, quero expor o contexto da carta usando elementos interativos (como mapa e linha do tempo) para engajar a turma e ilustrar visualmente os dados históricos.
- **Como espectador / seminarista**, quero navegar pelas heresias de Colossos e ver como Paulo as combate, para entender a aplicação prática da teologia e da eclesiologia da epístola.
- **Como usuário do painel**, quero uma interface com transições suaves e design refinado para absorver o conteúdo de forma intuitiva e memorável.

## Requisitos v1 (Escopados)

### 1. Contexto Histórico e Arqueológico
- [ ] **REQ-HIST-01**: Galeria de Curiosidades de Colossos
  - *Descrição:* Exibir informações históricas e descobertas arqueológicas relevantes (ex: a falta de escavações sistemáticas atuais no monte/tell de Colossos, a importância comercial da lã/tintura colossense, o terremoto de 60/61 d.C.).
  - *Critérios de Aceitação:* 
    - Apresentar pelo menos 4 cartões de curiosidades com imagens ilustrativas premium.
    - Cada cartão deve abrir um modal de detalhes com textos explicativos bem formatados.
- [ ] **REQ-MAP-01**: Mapa Interativo do Vale do Lico
  - *Descrição:* Exibir um mapa vetorizado (SVG) ou canvas interativo contendo Colossos, Laodicéia e Hierápolis.
  - *Critérios de Aceitação:*
    - Ao passar o mouse (hover) ou clicar nas cidades, mostrar informações de distância, conexões bíblicas (ex: Col 4:13) e importância geográfica.
    - Estilo visual de mapa antigo com elementos brilhantes (Gold/Amber).
- [ ] **REQ-TIME-01**: Linha do Tempo do Envio da Carta
  - *Descrição:* Uma linha do tempo interativa mostrando o contexto de produção e envio da epístola.
  - *Critérios de Aceitação:*
    - Apresentar marcos cronológicos principais: Prisão de Paulo em Roma (60-62 d.C.), redação simultânea de Efésios e Filemon, viagem de Tíquico e Onésimo levando as cartas.
    - Navegação interativa pelos pontos cronológicos.

### 2. Teologia e Eclesiologia
- [ ] **REQ-THEO-01**: Diagnosticador/Quiz da Heresia Colossense
  - *Descrição:* Um painel ou mini-game interativo para identificar as facetas do "problema da igreja" (a Heresia Colossense: Legalismo judaico, Gnosticismo incipiente, Culto a anjos e Ascetismo).
  - *Critérios de Aceitação:*
    - O usuário seleciona uma "influência herética" e o painel exibe a descrição do problema no século I.
    - O painel deve confrontar o erro teológico mostrando a resposta paulina direta em versículos selecionados.
- [ ] **REQ-THEO-02**: Explorador do Hino Cristológico (Col 1:15-20)
  - *Descrição:* Uma ferramenta de análise literária/teológica para desmembrar o hino cristológico da carta.
  - *Critérios de Aceitação:*
    - Dividir o texto em seções (ex: "Imagem do Deus Invisível", "Primogênito de toda a criação", "Reconciliação no sangue da cruz").
    - Permitir clique em cada linha para revelar notas teológicas e exegéticas detalhadas.

### 3. Conexões e Aplicações Eclesiológicas
- [ ] **REQ-ECCL-01**: Matriz de Conexão: Século I vs Século XXI
  - *Descrição:* Um painel que estabelece pontes entre os problemas da igreja de Colossos e os desafios eclesiológicos das igrejas contemporâneas, com soluções propostas a partir da teologia da epístola.
  - *Critérios de Aceitação:*
    - Apresentar em uma matriz interativa de 3 colunas: Problema em Colossos, Equivalente Moderno, Solução na Epístola.
    - Permitir filtro por tipo de problema (ex: Teológico, Comportamental/Relacionamentos, Misticismo).
- [ ] **REQ-TEAM-01**: Apresentação do Grupo do Seminário
  - *Descrição:* Uma tela ou aba dedicada aos membros do grupo de trabalho (máximo de 7 integrantes) com design elegante.
  - *Critérios de Aceitação:*
    - Exibir cards individuais com fotos/avatares, nomes e atribuições no seminário.

## Requisitos v2 (Futuros/Diferidos)
- Quiz avançado com pontuação e leaderboard local.
- Versão em áudio com narração dos textos em português.

## Out of Scope (Fora de Escopo)
- Gerenciamento de conteúdo via painel administrativo (CMS).
- Armazenamento de dados em nuvem.

## Traceability (Rastreabilidade)

*Esta seção será preenchida durante a criação do roteiro de desenvolvimento (Roadmap).*

---
*Last updated: 2026-06-05 after requirements definition*
