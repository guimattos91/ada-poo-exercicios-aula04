// 4. Defina uma classe chamada "Círculo" que tenha um atributo raio e métodos para calcular a área e o perímetro do círculo. Crie objetos de círculos com diferentes raios e exiba suas áreas e perímetros. ⭕📏📐

class Circulo {
    constructor(raio) {
        this.raio = raio;
    }

    calcularArea() {
        const area = Math.PI * this.raio ** 2;
        return area.toFixed(1);
    }

    calcularPerimetro() {
        const perimetro = 2 * Math.PI * this.raio;
        return perimetro.toFixed(1);
    }
}

// Objetos de círculos
const circulo1 = new Circulo(5);
const circulo2 = new Circulo(8);

// Exibindo Raio, Área e Perímetro
console.log(`Círculo 1: Raio = ${circulo1.raio}, Área = ${circulo1.calcularArea()}, Perímetro = ${circulo1.calcularPerimetro()}`);
console.log(`Círculo 2: Raio = ${circulo2.raio}, Área = ${circulo2.calcularArea()}, Perímetro = ${circulo2.calcularPerimetro()}`);
