const inputNumeros = document.getElementById('inputNumeros');
    const inputLetras = document.getElementById('inputLetras');
    const btnFuncao1 = document.getElementById('btnFuncao1');
    const btnFuncao2 = document.getElementById('btnFuncao2');
    const output = document.getElementById('output');

    btnFuncao1.addEventListener('click', () => {
      const raw = inputNumeros.value.trim();
      if (!raw) {
        output.textContent = 'Por favor, digite 3 números separados por vírgula.';
        return;
      }
      const arr = raw.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
      if (arr.length !== 3) {
        output.textContent = 'Entrada inválida. Certifique-se de digitar exatamente 3 números.';
        return;
      }
      const resultado = funcao1(arr);
      output.textContent = resultado;
    });

    btnFuncao2.addEventListener('click', () => {
      const raw = inputLetras.value.trim().toUpperCase();
      if (!raw) {
        output.textContent = 'Por favor, digite 5 letras separadas por vírgula.';
        return;
      }
      const arr = raw.split(',').map(s => s.trim()).filter(s => /^[A-Z]$/.test(s));
      if (arr.length !== 5) {
        output.textContent = 'Entrada inválida. Certifique-se de digitar exatamente 5 letras (A-Z).';
        return;
      }
      const palavras = funcao2(arr);
      output.textContent = `10 palavras formadas: ${palavras.join(', ')}`;
    });

function calcularResultado() {
    const nums = Array.prototype.slice.call(arguments, 0, 3);
    const soma = nums.reduce((acc, val) => acc + val, 0);
    const quadradoPrimeiro = nums[0] ** 2;
    const quadradoSegundo = nums[1] ** 2;
    return `A soma dos três números é:${soma}, o quadrado do primeiro é:${quadradoPrimeiro} e o quadrado do segundo é:${quadradoSegundo}`;
  }
  
  function funcao1(arr) {
    return calcularResultado.apply(null, arr);
  }
  
  function funcao2(letras) {
    const resultado = [];
  
    function permutacoes(array, n = array.length) {
      if (n <= 1) {
        return [array.join('')];
      }
      let palavras = [];
      for (let i = 0; i < n; i++) {
        palavras = palavras.concat(permutacoes(array, n - 1));
        if (n % 2 === 0) {
          [array[i], array[n - 1]] = [array[n - 1], array[i]];
        } else {
          [array[0], array[n - 1]] = [array[n - 1], array[0]];
        }
      }
      return palavras;
    }
  
    const todasPalavras = permutacoes(letras);
  
    const palavrasUnicas = [...new Set(todasPalavras)];
  
    palavrasUnicas.slice(0, 10).forEach(function(palavra) {
      Array.prototype.push.apply(resultado, [palavra]);
    });
  
    return resultado;
  }
