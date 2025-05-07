// Função 1: Receber três números e retornar o maior
function maiorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Função 2: Receber três números e retorná-los em ordem crescente
function ordenarTresNumeros(num1, num2, num3) {
    // Colocar em array e ordenar
    let arr = [num1, num2, num3];
    arr.sort((a,b) => a - b);
    return arr;
}

// Função 3: Receber uma string e verificar se é palíndromo
function ehPalindromo(str) {
    if (!str) return false;
    // Converter para minúsculas, remover espaços em branco
    const processed = str.toLowerCase().replace(/\s+/g, "");
    // Comparar com a string invertida
    const invertida = processed.split("").reverse().join("");
    return processed === invertida;
}

// Função 4: Receber duas palavras e verificar se a segunda é subconjunto da primeira
function verificarSubconjunto(palavra1, palavra2) {
    // Verifica se alguma palavra é undefined ou vazia
    if (!palavra1 || !palavra2) return "erro";
    // Verifica se a segunda palavra é subconjunto da primeira
    // Usando includes (método de string)
    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

/* Funções para receber dados do HTML e exibir resultados */

function exibirMaior() {
    const n1 = Number(document.getElementById("maior-num1").value);
    const n2 = Number(document.getElementById("maior-num2").value);
    const n3 = Number(document.getElementById("maior-num3").value);
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById("resultado-maior").textContent = "Por favor, informe os três números corretamente.";
        return;
    }
    const maior = maiorDeTres(n1, n2, n3);
    document.getElementById("resultado-maior").textContent = `O maior número é: ${maior}`;
}

function exibirOrdenados() {
    const n1 = Number(document.getElementById("ordena-num1").value);
    const n2 = Number(document.getElementById("ordena-num2").value);
    const n3 = Number(document.getElementById("ordena-num3").value);
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById("resultado-ordenado").textContent = "Por favor, informe os três números corretamente.";
        return;
    }
    const ordenados = ordenarTresNumeros(n1, n2, n3);
    document.getElementById("resultado-ordenado").textContent = `Números em ordem crescente: ${ordenados.join(", ")}`;
}

function exibirPalindromo() {
    const texto = document.getElementById("palindromo-texto").value;
    if (!texto.trim()) {
        document.getElementById("resultado-palindromo").textContent = "Por favor, informe um texto válido.";
        return;
    }
    const resultado = ehPalindromo(texto) ? "É palíndromo." : "Não é palíndromo.";
    document.getElementById("resultado-palindromo").textContent = resultado;
}

function exibirSubconjunto() {
    const p1 = document.getElementById("subconjunto-principal").value.trim();
    const p2 = document.getElementById("subconjunto-secundaria").value.trim();
    const resultado = verificarSubconjunto(p1, p2);
    if(resultado === "erro") {
        document.getElementById("resultado-subconjunto").textContent = "Erro: Uma ou ambas as palavras estão vazias ou indefinidas.";
    } else {
        document.getElementById("resultado-subconjunto").textContent = `A palavra "${p2}" ${resultado} da palavra "${p1}".`;
    }
}