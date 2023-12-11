// 3. Crie uma classe chamada "ContaBancaria" com os atributos número da conta, saldo e nome do titular. Adicione um construtor para inicializar esses atributos. Crie métodos para depositar e sacar dinheiro da conta. Teste esses métodos em objetos de conta bancária. 💰🏦


class ContaBancaria {
    constructor(numeroConta, saldoInicial, nomeTitular) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
        this.nomeTitular = nomeTitular;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente. Saque não realizado.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
        }
    }
}

// Objetos de conta bancária
const conta1 = new ContaBancaria(12345, 1000, "Alberto Andrade");
const conta2 = new ContaBancaria(54321, 500, "Ana Carolina");

// Depositando
conta1.depositar(500);
conta2.depositar(200);

// Sacando
conta1.sacar(200);
conta2.sacar(1000);

// Mostrando o Saldo
console.log(`${conta1.nomeTitular}: Saldo final = ${conta1.saldo}`);
console.log(`${conta2.nomeTitular}: Saldo final = ${conta2.saldo}`);
