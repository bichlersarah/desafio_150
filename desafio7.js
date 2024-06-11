//Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. 

//O script deve realizar as seguintes tarefas:
// nome: O nome do aluno.
// cpf: O CPF do aluno.
// cidade: A cidade onde o aluno mora.

//notas: Um array com 4 notas do aluno. Imprima o nome, CPF e cidade do aluno. 
//Imprima cada uma das notas do array notas. Calcule a média das notas do aluno e imprima.
//Selecione uma das notas aleatoriamente, convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). 
// Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota aleatória do array. Utilize template literals para a concatenação de strings


const cpf = "123.123.123-12";

var nome = "Gabriela";
var cidade = "João Pessoa";

console.log(nome);
console.log(cpf);
console.log(cidade);



const notas = [10.00, 8.00, 9.00, 8.05];


console.log(`A primeira nota é: ${notas[0]}`);
console.log(`A segunda nota é: ${notas[1]}`);
console.log(`A terceira nota é: ${notas[2]}`);
console.log(`A quarta nota é: ${notas[3]}`);

var media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
console.log(`A média da Aluna é: ${media.toFixed(2)}`);

const notaAleatoria = notas[Math.floor(Math.random() * notas.length)];
const notaSorteada = (notaAleatoria*10);

console.log(`A conversão da nota ficou em: ${notaSorteada}`);