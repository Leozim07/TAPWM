// Função para escolher o que o computador vai jogar (Pedra, Papel ou Tesoura)
function escolherComputador() {
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1; // Gera 1, 2 ou 3
    switch (numeroAleatorio) {
        case 1:
            return 'Pedra';
        case 2:
            return 'Papel';
        case 3:
            return 'Tesoura';
        default:
            return '';
    }
}

// Função para determinar o vencedor
function determinarVencedor(escolhaJogador, escolhaComputador) {
    if (escolhaJogador === escolhaComputador) {
        return 'Empate';
    }
    if (
        (escolhaJogador === 'Pedra' && escolhaComputador === 'Tesoura') ||
        (escolhaJogador === 'Tesoura' && escolhaComputador === 'Papel') ||
        (escolhaJogador === 'Papel' && escolhaComputador === 'Pedra')
    ) {
        return 'Você venceu!';
    } else {
        return 'O computador venceu!';
    }
}

// Função para simular o jogo
function jogar() {
    // Solicitar escolha do jogador
    const escolhaJogador = prompt('Escolha: Pedra, Papel ou Tesoura').toLowerCase();
    
    if (!['pedra', 'papel', 'tesoura'].includes(escolhaJogador)) {
        alert('Escolha inválida! Por favor, escolha entre Pedra, Papel ou Tesoura.');
        return;
    }

    // O computador faz uma escolha aleatória
    const escolhaComputador = escolherComputador();

    // Determinar o vencedor
    const resultado = determinarVencedor(escolhaJogador.charAt(0).toUpperCase() + escolhaJogador.slice(1), escolhaComputador);

    // Exibir o resultado
    alert(`Você escolheu ${escolhaJogador.charAt(0).toUpperCase() + escolhaJogador.slice(1)} e o computador escolheu ${escolhaComputador}. \n${resultado}`);
}

// Iniciar o jogo
jogar();
