//Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). 
//Utilize a função filter() para criar um novo array contendo apenas os alunos com idade maior ou igual a 18 anos. 
//Imprima o novo array.


const alunos = [
    { nome: "Bruna", idade: 17, notas: [7.5, 8.2, 9.1]},
    { nome: "Carla", idade: 18, notas: [9.0, 8.5, 10.0]},
    { nome: "Guilherme", idade: 17, notas: [6.9, 7.8, 8.1]},
];


const alunosIdade = alunos.filter(aluno => aluno.idade >= 18);

console.log(alunosIdade);
