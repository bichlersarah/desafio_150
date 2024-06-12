//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao quadrado.

const numeros = [2, 4, 6, 8, 10];

function numerosAoQuadrado  (numerosElevados) {
    return numerosElevados * numerosElevados;
}

const numerosResultado = numeros.map(numerosAoQuadrado);

console.log(`O resultado da lista de números elevados ao quadrado é de: ${numerosResultado}`);
