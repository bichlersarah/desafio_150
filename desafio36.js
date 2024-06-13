//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 5.

const numeros = [3, 5, 8, 9, 20, 24, 27, 30, 35, 40, 45];

function numerosMultiplos (multiplos) {
    return multiplos % 5 == 0;  
}
  
const multiplosDeCinco = numeros.filter(numerosMultiplos);
console.log(`Os números multiplos de 5 são: ${multiplosDeCinco}`);