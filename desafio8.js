// Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno. 

//O programa deve imprimir:
//A primeira nota do aluno é: …
//A segunda nota do aluno é: …
//A terceira nota do aluno é: …
//A média do aluno é: …

//O aluno está: APROVADO ou REPROVADO (APROVADO quando a média for maior ou igual a 7).

const aluno = [7.00, 10.00, 9.05];

console.log(`A primeira nota do aluno é: ${aluno[0]}`);
console.log(`A segunda nota do aluno é: ${aluno[1]}`);
console.log(`A terceira nota do aluno é: ${aluno[2]}`);

var media = (aluno[0]+aluno[1]+aluno[2])/aluno.length;
console.log(`A média da aluna é: ${media.toFixed(2)}`);

if (media >= 7) {
    console.log("Você está APROVADO!");
} else {
    console.log("Você está REPROVADO!");
}
