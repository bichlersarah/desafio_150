//Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). 
//Utilize um loop for para imprimir o nome de cada aluno.

const alunos = [
    { nome: "Bruna", idade: 17, notas: [7.5, 8.2, 9.1]},
    { nome: "Carla", idade: 18, notas: [9.0, 8.5, 10.0]},
    { nome: "Guilherme", idade: 17, notas: [6.9, 7.8, 8.1]},
];

for (const aluno of alunos){
    console.log(aluno.nome);
}