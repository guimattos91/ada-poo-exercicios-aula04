// 01. Crie uma classe chamada "Carro" com os atributos marca, modelo e ano. Em seguida, crie um construtor para a classe que inicializa esses atributos. Crie objetos de carros diferentes e imprima suas informações. 🚗


class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

// Objetos de carros
const carro1 = new Carro("Renault", "Clio", 2006);
const carro2 = new Carro("Fiat", "Idea", 2013);

// Informações dos carros
console.log("Informações do Carro 1:");
console.log(`Marca: ${carro1.marca}`);
console.log(`Modelo: ${carro1.modelo}`);
console.log(`Ano: ${carro1.ano}`);

console.log("Informações do Carro 2:");
console.log(`Marca: ${carro2.marca}`);
console.log(`Modelo: ${carro2.modelo}`);
console.log(`Ano: ${carro2.ano}`);
