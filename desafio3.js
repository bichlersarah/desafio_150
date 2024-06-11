//Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:
//var nomeAluno;
//let curso;
//const matricula;

//As variáveis nomeAluno e matricula devem estar em um escopo global. A variável curso deve estar dentro de uma função
// A função deve retornar uma string que concatene todas as informações do aluno em uma única linha utilizando template literals ${var}.


const matricula = "20241008020";

var nomeAluno = "Louise Guimarães";

function curso () {
    let curso = "Medicina Veterinária";
    return curso;
}

console.log(`A aluna ${nomeAluno}, de matrícula de número ${matricula}, está matricula nesta instituição cursando o 4 semestre do curso de ${curso()}.`);