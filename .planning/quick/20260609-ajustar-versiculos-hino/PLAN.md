# Plan: Ajustar Versículos do Hino Cristológico

Ajustar a correspondência dos versículos do hino de Colossenses 1:15-20 para corrigir o deslocamento incorreto gerado pela divisão dos versículos 16a e 16b.

## Proposed Changes

### [data.js](file:///c:/Users/esdras.costa/OneDrive - ENGELMIG ENERGIA LTDA/dev_files/carta_colossenses/data.js)
- Adicionar o campo `versiculo` a cada objeto no array `hino`:
  1. "Ele é a imagem..." -> `versiculo: "15"`
  2. "pois nele foram criadas..." -> `versiculo: "16a"`
  3. "sejam tronos..." -> `versiculo: "16b"`
  4. "Ele é antes de..." -> `versiculo: "17"`
  5. "Ele é a cabeça..." -> `versiculo: "18"`
  6. "Pois foi do agrado..." -> `versiculo: "19"`
  7. "e por meio dele..." -> `versiculo: "20"`

### [index.js](file:///c:/Users/esdras.costa/OneDrive - ENGELMIG ENERGIA LTDA/dev_files/carta_colossenses/index.js)
- Modificar a função `renderHino()` para chamar `renderExegesis(item, item.versiculo)` em vez de `renderExegesis(item, index + 15)`.
- Ajustar `renderExegesis(item, number)` para receber o versículo formatado (string) e exibi-lo como `Colossenses 1:${number}`.

## Verification
- Abrir e verificar no navegador se os versículos são exibidos corretamente de 15 a 20 (incluindo 16a e 16b).
