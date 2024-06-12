//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras minúsculas. 
//Utilize a função toLowerCase() para converter as strings.

const string = ["BANANA", "UVA", "MORANGO", "MELÂNCIA", "BERGAMOTA", "LIMÃO"];

const nomesLower = string.map(string => string.toLowerCase());

console.log(`lista da feira: ${nomesLower}`);