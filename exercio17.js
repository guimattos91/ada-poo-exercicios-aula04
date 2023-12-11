// 17. Crie uma classe chamada "Cafeteira" com os atributos marca, capacidade e quantidade de café. Implemente um construtor para inicializar esses atributos. Crie métodos para encher a cafeteira de café e para fazer uma xícara de café. Teste esses métodos em objetos de cafeteira.

class Cafeteira {
    constructor(marca, capacidade) {
        this.marca = marca;
        this.capacidade = capacidade;
        this.quantidadeCafe = 0;
    }

    encherCafeteira() {
        this.quantidadeCafe = this.capacidade;
        console.log(`Cafeteira ${this.marca} foi enchida.  ${this.quantidadeCafe} gramas de café.`);
    }

    fazerCafe(xicara) {
        if (this.quantidadeCafe >= xicara) {
            this.quantidadeCafe -= xicara;
            console.log(`Café feito! ainda temos ${this.quantidadeCafe} gramas de café.`);
        } else {
            console.log("Não há café suficiente na cafeteira para fazer uma xícara.");
        }
    }
}

// Objetos de cafeteiras
const cafeteira1 = new Cafeteira("Philips", 500);
const cafeteira2 = new Cafeteira("NKS", 1000);

// Usando as cafeteiras
cafeteira1.encherCafeteira();
cafeteira1.fazerCafe(150);
cafeteira1.fazerCafe(400); // teste para quando não há café suficiente

cafeteira2.encherCafeteira();
cafeteira2.fazerCafe(120);


