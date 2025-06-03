// 1. Função construtora para Retângulo
        function Retangulo(x, y) {
            this.base = x;
            this.altura = y;
            
            this.calcularArea = function() {
                return this.base * this.altura;
            };
        }
        
        function calcularAreaRetangulo() {
            const base = parseFloat(document.getElementById('base').value);
            const altura = parseFloat(document.getElementById('altura').value);
            
            if (isNaN(base) || isNaN(altura)) {
                alert("Por favor, insira valores numéricos válidos para base e altura.");
                return;
            }
            
            const retangulo = new Retangulo(base, altura);
            const area = retangulo.calcularArea();
            
            document.getElementById('resultadoRetangulo').innerHTML = 
                `Retângulo criado com base ${base} e altura ${altura}.<br>
                 Área calculada: ${area}`;
        }
        
        // 2. Classes para Conta Bancária
        class Conta {
            constructor(nomeCorrentista, banco, numeroConta, saldo) {
                this._nomeCorrentista = nomeCorrentista;
                this._banco = banco;
                this._numeroConta = numeroConta;
                this._saldo = saldo;
            }
            
            // Getters e Setters
            get nomeCorrentista() {
                return this._nomeCorrentista;
            }
            
            set nomeCorrentista(novoNome) {
                this._nomeCorrentista = novoNome;
            }
            
            get banco() {
                return this._banco;
            }
            
            set banco(novoBanco) {
                this._banco = novoBanco;
            }
            
            get numeroConta() {
                return this._numeroConta;
            }
            
            set numeroConta(novoNumero) {
                this._numeroConta = novoNumero;
            }
            
            get saldo() {
                return this._saldo;
            }
            
            set saldo(novoSaldo) {
                this._saldo = novoSaldo;
            }
            
            mostrarDados() {
                return `Nome: ${this.nomeCorrentista}<br>
                        Banco: ${this.banco}<br>
                        Conta: ${this.numeroConta}<br>
                        Saldo: R$ ${this.saldo.toFixed(2)}`;
            }
        }
        
        class Corrente extends Conta {
            constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
                super(nomeCorrentista, banco, numeroConta, saldo);
                this._saldoEspecial = saldoEspecial;
            }
            
            get saldoEspecial() {
                return this._saldoEspecial;
            }
            
            set saldoEspecial(novoSaldoEspecial) {
                this._saldoEspecial = novoSaldoEspecial;
            }
            
            mostrarDados() {
                return `${super.mostrarDados()}<br>
                        Saldo Especial: R$ ${this.saldoEspecial.toFixed(2)}<br>
                        Limite Total: R$ ${(this.saldo + this.saldoEspecial).toFixed(2)}`;
            }
        }
        
        class Poupanca extends Conta {
            constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
                super(nomeCorrentista, banco, numeroConta, saldo);
                this._juros = juros;
                this._dataVencimento = dataVencimento;
            }
            
            get juros() {
                return this._juros;
            }
            
            set juros(novosJuros) {
                this._juros = novosJuros;
            }
            
            get dataVencimento() {
                return this._dataVencimento;
            }
            
            set dataVencimento(novaData) {
                this._dataVencimento = novaData;
            }
            
            mostrarDados() {
                return `${super.mostrarDados()}<br>
                        Juros: ${this.juros}%<br>
                        Data de Vencimento: ${this.dataVencimento}`;
            }
        }
        
        // Variáveis para armazenar as contas criadas
        let contaCorrente;
        let contaPoupanca;
        
        function criarContaCorrente() {
            const nome = document.getElementById('nomeCorrente').value;
            const banco = document.getElementById('bancoCorrente').value;
            const numero = document.getElementById('numeroCorrente').value;
            const saldo = parseFloat(document.getElementById('saldoCorrente').value);
            const saldoEspecial = parseFloat(document.getElementById('saldoEspecial').value);
            
            if (!nome || !banco || !numero || isNaN(saldo) || isNaN(saldoEspecial)) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;
            }
            
            contaCorrente = new Corrente(nome, banco, numero, saldo, saldoEspecial);
            mostrarResultadosContas();
        }
        
        function criarContaPoupanca() {
            const nome = document.getElementById('nomePoupanca').value;
            const banco = document.getElementById('bancoPoupanca').value;
            const numero = document.getElementById('numeroPoupanca').value;
            const saldo = parseFloat(document.getElementById('saldoPoupanca').value);
            const juros = parseFloat(document.getElementById('juros').value);
            const vencimento = document.getElementById('vencimento').value;
            
            if (!nome || !banco || !numero || isNaN(saldo) || isNaN(juros) || !vencimento) {
                alert("Por favor, preencha todos os campos corretamente.");
                return;
            }
            
            contaPoupanca = new Poupanca(nome, banco, numero, saldo, juros, vencimento);
            mostrarResultadosContas();
        }
        
        function mostrarResultadosContas() {
            let resultado = "<h3>Contas Criadas</h3>";
            
            if (contaCorrente) {
                resultado += "<h4>Conta Corrente:</h4>";
                resultado += contaCorrente.mostrarDados();
            } else {
                resultado += "<p>Nenhuma conta corrente criada ainda.</p>";
            }
            
            resultado += "<hr>";
            
            if (contaPoupanca) {
                resultado += "<h4>Conta Poupança:</h4>";
                resultado += contaPoupanca.mostrarDados();
            } else {
                resultado += "<p>Nenhuma conta poupança criada ainda.</p>";
            }
            
            document.getElementById('resultadoContas').innerHTML = resultado;
        }