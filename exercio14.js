// 14. Crie uma classe chamada "TriânguloRetângulo" com os atributos base e altura. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular a hipotenusa do triângulo (Teorema de Pitágoras). Crie objetos de triângulos retângulos e calcule suas hipotenusas. 📐🔍

class TrianguloRetangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularHipotenusa() {
        const hipotenusa = Math.sqrt(this.base ** 2 + this.altura ** 2);
        return hipotenusa;
    }

    descobrirTipodeTriangulo() {
        const hipotenusa = Math.sqrt(this.base ** 2 + this.altura ** 2);

        if (this.altura === this.base && this.base === hipotenusa) {
            return "É equilátero";
        } else if (this.altura === this.base || this.altura === hipotenusa || this.base === hipotenusa) {
            return "É Isósceles";
        } else {
            return "É Escaleno";
        }
    }

}

// Triângulos retângulos
const triangulo1 = new TrianguloRetangulo(3, 4);
const triangulo2 = new TrianguloRetangulo(5, 5);
const triangulo3 = new TrianguloRetangulo(7, 24);

// Calculando hipotenusa
console.log(`Triângulo 1: Hipotenusa = ${triangulo1.calcularHipotenusa()}`);
console.log(`Triângulo 2: Hipotenusa = ${triangulo2.calcularHipotenusa()}`);
console.log(`Triângulo 3: Hipotenusa = ${triangulo3.calcularHipotenusa()}`);


// Tipo de Triângulo
console.log(`Triângulo 1:  ${triangulo1.descobrirTipodeTriangulo()}`);
console.log(`Triângulo 2:  ${triangulo2.descobrirTipodeTriangulo()}`);
console.log(`Triângulo 3:  ${triangulo3.descobrirTipodeTriangulo()}`);
