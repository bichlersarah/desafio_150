//Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números).
//Utilize a função reduce() para calcular a média das idades dos alunos.

const alunos = [
    { nome: "Bruna", idade: 17, notas: [7.5, 8.2, 9.1]},
    { nome: "Carla", idade: 18, notas: [9.0, 8.5, 10.0]},
    { nome: "Guilherme", idade: 17, notas: [6.9, 7.8, 8.1]},
];

const idadeMedia = alunos.reduce((soma, alunos) => soma + alunos.idade, 0) / alunos.length;

console.log(`A média da idade dos estudantes é de: ${idadeMedia.toFixed(2)} anos`);
