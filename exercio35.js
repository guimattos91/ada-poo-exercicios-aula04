// 35. Defina uma classe chamada "Viagem" com os atributos destino, data de partida e data de retorno. Implemente um construtor para esta classe. Crie um método para calcular a duração da viagem em dias. Crie objetos de viagens e teste o método de cálculo de duração. ✈️🗓️

class Viagem {
    constructor(destino, dataPartida, dataRetorno) {
        this.destino = destino;
        this.dataPartida = new Date(dataPartida);
        this.dataRetorno = new Date(dataRetorno);
    }



    calcularDuracao() {
        const milissegundosPorDia = 1000 * 60 * 60 * 24;
        const diferencaEmMilissegundos = this.dataRetorno - this.dataPartida;
        const duracaoEmDias = Math.ceil(diferencaEmMilissegundos / milissegundosPorDia);
        return duracaoEmDias;
    }
}

// Criando objetos de viagens e testando o método de cálculo de duração
const viagem1 = new Viagem("Paris", "2023-01-01", "2023-01-10");
const viagem2 = new Viagem("Londres", "2023-12-18", "2024-01-22");


// Exibindo a duração das viagens
console.log(`Viagem para ${viagem1.destino}: ${viagem1.calcularDuracao()} dias`);

console.log(`Viagem para ${viagem2.destino}: ${viagem2.calcularDuracao()} dias`);




