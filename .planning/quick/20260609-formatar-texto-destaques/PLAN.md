# Plan: Formatar Texto de Destaques (Aspas Simples e Outros Idiomas)

Substituir termos entre aspas simples por negrito (`<strong>`) e palavras em outros idiomas por itálico (`<i>` ou `<em>`) nos arquivos de dados para fins de padronização visual.

## Proposed Changes

### [data.js](file:///c:/Users/esdras.costa/OneDrive - ENGELMIG ENERGIA LTDA/dev_files/carta_colossenses/data.js)
- Substituir ocorrências de aspas simples por tags `<strong>`:
  - `'tell'` -> `<strong>tell</strong>`
  - `'colossiana'` -> `<strong>colossiana</strong>`
  - `'Epístola Paulina'` -> `<strong>Epístola Paulina</strong>`
  - `'eikon'` -> `<strong>eikon</strong>`
  - `'Primogênito'` -> `<strong>Primogênito</strong>`
  - `'tronos'`, `'soberanias'`, `'poderes'`, `'autoridades'` -> `<strong>tronos</strong>`, `<strong>soberanias</strong>`, `<strong>poderes</strong>`, `<strong>autoridades</strong>`
  - `'subsiste'` -> `<strong>subsiste</strong>`
  - `'cabeça'` -> `<strong>cabeça</strong>`
  - `'plenitude'` -> `<strong>plenitude</strong>`
  - `'sangue derramado na cruz'` -> `<strong>sangue derramado na cruz</strong>`
  - `'Espiritualidade Fluida'` -> `<strong>Espiritualidade Fluida</strong>`
  - `'completar'` -> `<strong>completar</strong>`
  - Aspas simples nos versículos da Matriz de Conexões -> `<strong>...</strong>`
- Substituir palavras em outros idiomas por `<i>`:
  - `tell` -> `<i>tell</i>` (onde aplicável)
  - `mound` -> `<i>mound</i>`
  - `colossinus` -> `<i>colossinus</i>`
  - `Ephesus` -> `<i>Ephesus</i>`
  - `Honaz Dağı` -> `<i>Honaz Dağı</i>`
  - `Pamukkale` -> `<i>Pamukkale</i>`
  - `eikon` -> `<i>eikon</i>`
  - `prototokos` -> `<i>prototokos</i>`
  - `demiurgos` -> `<i>demiurgos</i>`
  - `synesteken` -> `<i>synesteken</i>`
  - `kephale` -> `<i>kephale</i>`
  - `pleroma` -> `<i>pleroma</i>`

## Verification
- Abrir e verificar no navegador se os textos são exibidos com a formatação correta em negrito e itálico.
