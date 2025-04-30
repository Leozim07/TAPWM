function verificarTriangulo(a, b, c) {
    // Verifica se os valores são números
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return "Por favor, insira apenas números.";
    }

    // Converte os valores para números
    a = Number(a);
    b = Number(b);
    c = Number(c);

    // Verifica se os lados formam um triângulo
    const formaTriangulo = (Math.abs(b - c) < a && a < (b + c)) &&
                           (Math.abs(a - c) < b && b < (a + c)) &&
                           (Math.abs(a - b) < c && c < (a + b));

    if (!formaTriangulo) {
        return "Os valores não formam um triângulo.";
    }

    // Determina o tipo do triângulo
    if (a === b && b === c) {
        return "Os valores formam um triângulo equilátero.";
    } else if (a === b || b === c || a === c) {
        return "Os valores formam um triângulo isósceles.";
    } else {
        return "Os valores formam um triângulo escaleno.";
    }
}

// Exemplo de uso
const a = prompt("Digite o valor de a:");
const b = prompt("Digite o valor de b:");
const c = prompt("Digite o valor de c:");

const resultado = verificarTriangulo(a, b, c);
alert(resultado);