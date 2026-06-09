---
status: complete
---
# Summary: Ajustar Versículos do Hino Cristológico

Tarefa concluída com sucesso.

## Changes Made
- Adicionado campo `versiculo` a cada objeto no array `hino` em `data.js`.
- Atualizada a função de renderização `renderHino()` e `renderExegesis()` em `index.js` para usar a propriedade `versiculo` de cada item em vez de calcular `index + 15`.

## Verification
- O mapeamento agora exibe corretamente os versículos de 15 a 20 (incluindo 16a e 16b), sem gerar o versículo 21 indevido.
