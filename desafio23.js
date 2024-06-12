//Crie um script que declare um array de números e utilize a função reduce() para calcular a soma de todos os números do array. 
//Imprima o resultado.

const numeros = [10, 20, 30, 40, 50];

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(`A soma dos números é: ${soma}`);
