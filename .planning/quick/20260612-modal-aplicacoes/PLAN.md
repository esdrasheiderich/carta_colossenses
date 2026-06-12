# Plan: Modal para Aplicações Eclesiais

Abrir um modal detalhado e visualmente atraente ao clicar em qualquer um dos quadros de Aplicações Eclesiais, ampliando o seu conteúdo para facilitar a leitura.

## Proposed Changes

### 1. HTML (`index.html`)
- Criar a estrutura do modal `#aplicacao-modal` logo abaixo do modal de curiosidades.
- Incluir elementos para exibir Categoria, Problema em Colossos, Equivalente Contemporâneo, Solução Bíblica na Epístola e Versículo de referência, todos estruturados com ícones e classes semânticas.

### 2. CSS (`index.css`)
- Adicionar `cursor: pointer` e efeitos de hover (`transform: translateY(-4px)`) para `.matrix-card` indicando interatividade.
- Estilizar as seções internas do novo modal (com cores harmoniosas para o problema contemporâneo e solução bíblica).

### 3. JavaScript (`index.js`)
- Modificar `renderMatrix()` para anexar um evento de clique a cada `.matrix-card`.
- Ao clicar no card, capturar os dados do item correspondente de `DATA.matriz`.
- Preencher o modal `#aplicacao-modal` e adicionar a classe `.open` para abri-lo.
- Implementar a lógica de fechamento do modal (clique no botão fechar ou fora da área do modal).

## Verification Plan
- Utilizar o subagente do navegador para verificar se ao clicar em um card da Matriz o modal abre corretamente com todo o conteúdo e com transições suaves.
- Verificar o fechamento do modal.
