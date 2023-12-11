// 28. Crie uma classe chamada "CarroEsportivo" com os atributos marca, modelo, ano e velocidade máxima. Implemente um construtor para esta classe. Crie métodos para acelerar e frear o carro, e para exibir a velocidade atual. Crie objetos de carros esportivos e teste os métodos.

class CarroEsportivo {
    constructor(marca, modelo, ano, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidadeAtual = 0;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    acelerar(aceleracao) {
        this.velocidadeAtual += aceleracao;
        if (this.velocidadeAtual > this.velocidadeMaxima) {
            this.velocidadeAtual = this.velocidadeMaxima;
        }
        console.log(`O carro acelerou para ${this.velocidadeAtual} km/h.`);
    }

    frear(deceleracao) {
        this.velocidadeAtual -= deceleracao;
        if (this.velocidadeAtual < 0) {
            this.velocidadeAtual = 0;
        }
        console.log(`O carro reduziu para ${this.velocidadeAtual} km/h.`);
    }

    exibirVelocidadeAtual() {
        console.log(`Velocidade atual do ${this.marca} ${this.modelo}: ${this.velocidadeAtual} km/h.`);
    }
}

// Criando objetos de carros esportivos e testando os métodos
const carro1 = new CarroEsportivo("Ferrari", "F8 Tributo", 2022, 320);
const carro2 = new CarroEsportivo("Porsche", "911 Turbo S", 2022, 330);

// Acelerar e exibir a velocidade
carro1.acelerar(50);
carro1.exibirVelocidadeAtual();

// Frear e exibir a velocidade
carro1.frear(20);
carro1.exibirVelocidadeAtual();

// Ir acima da velocidade máxima do carro
carro1.acelerar(300);
carro1.exibirVelocidadeAtual();


// Acelerar e exibir a velocidade
carro2.acelerar(80);
carro2.exibirVelocidadeAtual();

// Frear e exibir a velocidade
carro2.frear(50);
carro2.exibirVelocidadeAtual();

// Ir acima da velocidade máxima do carro
carro2.acelerar(320);
carro2.exibirVelocidadeAtual();