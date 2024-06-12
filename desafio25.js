//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas.
//Utilize a função toUpperCase() para converter as strings.

const nomes = ["juliano", "daniel", "max", "william"];

const nomesUpper =  nomes.map(nomes => nomes.toUpperCase());

console.log(`Os nomes dos ganhadores são: ${nomesUpper}`);

