// 7. Desenvolva uma classe chamada "Aluno" com os atributos nome, matrícula e lista de notas. Implemente um construtor para inicializar os atributos e um método para calcular a média das notas do aluno. Crie objetos de alunos e calcule suas médias. 🎓📊

class Aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calcularMedia() {
        const totalNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
        const media = totalNotas / this.notas.length;
        return media.toFixed(1);
    }
}

// Objetos de alunos
const aluno1 = new Aluno("Kevin dos Santos", "2021001", [8, 7, 9, 6]);
const aluno2 = new Aluno("Marta Ramos", "2021002", [9, 8, 7, 9]);

// Exibindo as médias
console.log(`${aluno1.nome} (Matrícula: ${aluno1.matricula}): Média = ${aluno1.calcularMedia()}`);
console.log(`${aluno2.nome} (Matrícula: ${aluno2.matricula}): Média = ${aluno2.calcularMedia()}`);

