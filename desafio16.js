//Crie um script que declare um array de números e utilize um loop while para calcular a soma de todos os números do array. Imprima o resultado.

const numeros = [32, 40, 50, 20];
let soma = 0;

let i = 0;
while (i < numeros.length) {
  soma += numeros[i];
  i++;
}

console.log("A soma dos números do array é:", soma); 
