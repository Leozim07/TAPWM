 function calcularIMC() {
            // Obter valores dos campos
            const altura = parseFloat(document.getElementById('altura').value);
            const peso = parseFloat(document.getElementById('peso').value);
            
            // Validar os dados
            if (isNaN(altura)) {
                alert("Por favor, insira uma altura válida!");
                return;
            }
            
            if (isNaN(peso)) {
                alert("Por favor, insira um peso válido!");
                return;
            }
            
            // Calcular IMC
            const imc = peso / (altura * altura);
            
            // Determinar classificação
            let classificacao = "";
            let cor = "";
            
            if (imc < 18.5) {
                classificacao = "Abaixo do peso";
                cor = "#f39c12"; // laranja
            } else if (imc < 25) {
                classificacao = "Peso normal";
                cor = "#2ecc71"; // verde
            } else if (imc < 30) {
                classificacao = "Sobrepeso";
                cor = "#f1c40f"; // amarelo
            } else if (imc < 35) {
                classificacao = "Obesidade Grau I";
                cor = "#e67e22"; // laranja escuro
            } else if (imc < 40) {
                classificacao = "Obesidade Grau II";
                cor = "#d35400"; // vermelho alaranjado
            } else {
                classificacao = "Obesidade Grau III";
                cor = "#c0392b"; // vermelho
            }
            
            // Exibir resultado
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.style.display = "block";
            resultadoDiv.style.backgroundColor = cor;
            resultadoDiv.style.color = "white";
            resultadoDiv.innerHTML = `
                <h3>Seu IMC: ${imc.toFixed(2)}</h3>
                <p>Classificação: ${classificacao}</p>
            `;
        }