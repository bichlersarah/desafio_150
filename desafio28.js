// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.

const numeros = [1, 3, 4, 6, 10, 15, 18, 32, 36];

function numerosMultiplos (multiplos) {
    return multiplos % 3 == 0;
}

const multiplosDeTres = numeros.filter(numerosMultiplos);

console.log(`Estes são os números que são multiplos de três: ${multiplosDeTres}`);