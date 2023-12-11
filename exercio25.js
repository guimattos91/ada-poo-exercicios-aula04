// 25. Defina uma classe chamada "Cachorro" com os atributos nome, raça e idade. Implemente um construtor para esta classe. Crie um método para latir (exibir uma mensagem de latido) e outro método para calcular a idade humana do cachorro com base na idade real. Crie objetos de cachorros e teste os métodos. 🐕🗣️🐶

class Cachorro {
    constructor(nome, raca, idade, genero) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
        this.genero = genero;

    }

    latir() {
        console.log(`${this.nome}: au, au!`);
    }

    calcularIdadeHumana() {
        const idadeHumana = this.idade * 7;
        const verificarMaioridade = this.idade >= 2 ? "adulto" : "filhote"
        console.log(`${this.nome} tem aproximadamente ${idadeHumana} anos humanos. E é ${verificarMaioridade}`);
    }

    apresentarCachorro() {
        const idadeHumana = this.idade * 7;
        console.log(`${this.genero === "macho" ? "O" : "A"} ${this.nome} é da raça ${this.raca}, ${this.genero}, ${this.idade} anos`);
    }
}

// Objetos de cachorros
const cachorro1 = new Cachorro("Malby", "Shitzu", 3, "macho");
const cachorro2 = new Cachorro("Nala", "Poodle", 1, "fêmea");


// Idade humana baseada na idade do cachorro
cachorro1.calcularIdadeHumana();
cachorro2.calcularIdadeHumana();

// Apresentando o cachorro
cachorro1.apresentarCachorro();
cachorro2.apresentarCachorro();

// Latidos
cachorro1.latir();
cachorro2.latir();