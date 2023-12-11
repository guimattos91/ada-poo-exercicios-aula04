// 22. Crie uma classe chamada "Hotel" com os atributos nome, localização e lista de quartos. Implemente um construtor para inicializar esses atributos e métodos para reservar quartos e verificar a disponibilidade. Crie objetos de hotéis e teste os métodos. 🏨🌆🛏️

class Hotel {
    constructor(nome, localizacao, numeroQuartos) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.quartosDisponiveis = Array.from({ length: numeroQuartos }, (_, index) => index + 1);
    }

    verificarDisponibilidade() {
        if (this.quartosDisponiveis.length === 0) {
            console.log(`Que pena! Todos os quartos do ${this.nome} estão ocupados.`);
        } else {
            console.log(`Quartos disponíveis no ${this.nome}: ${this.quartosDisponiveis.join(', ')}`);
        }
    }

    reservarQuarto() {
        if (this.quartosDisponiveis.length === 0) {
            console.log(`Desculpe, não há quartos disponíveis no ${this.nome}.`);
        } else {
            const quartoReservado = this.quartosDisponiveis.shift();
            console.log(`Quarto ${quartoReservado} reservado no ${this.nome}.`);
        }
    }
}

// Oobjetos de hotéis
const hotel1 = new Hotel("Hotel A", "Cidade A", 0);
const hotel2 = new Hotel("Hotel B", "Cidade B", 5);

// Disponibilidade
hotel1.verificarDisponibilidade();
hotel2.verificarDisponibilidade();

// Reservar
hotel1.reservarQuarto();
hotel2.reservarQuarto();

// Disponibilidade após as reservas
hotel1.verificarDisponibilidade();
hotel2.verificarDisponibilidade();
