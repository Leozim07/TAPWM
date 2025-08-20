(function () {
      const input = document.getElementById('texto');
      const upper = document.getElementById('opt-upper');
      const lower = document.getElementById('opt-lower');

      function applyCase() {
        const mode = upper.checked ? 'upper' : (lower.checked ? 'lower' : null);
        if (!mode) return; // nada selecionado
        const start = input.selectionStart;
        const end = input.selectionEnd;
        const val = input.value;
        const transformed = mode === 'upper' ? val.toUpperCase() : val.toLowerCase();
        if (transformed !== val) {
          input.value = transformed;
          // mantém a posição do cursor/seleção
          input.setSelectionRange(start, end);
        }
      }

      // Aplica transformação enquanto digita
      input.addEventListener('input', applyCase);
      // Aplica ao alternar as opções
      upper.addEventListener('change', applyCase);
      lower.addEventListener('change', applyCase);

      // Seleciona MAIÚSCULAS por padrão? descomente a linha
      // upper.checked = true; applyCase();
    })();