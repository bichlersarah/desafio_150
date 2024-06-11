//Crie um script que declare um array de números e utilize a função filter() para criar um novo array contendo apenas os números pares. Imprima o novo array.

const numeros = [16, 40, 23, 86];

function isPar (numero) {
    return numero % 2 == 0;
}

const numerosPares = numeros.filter(isPar);

console.log("Números pares: ", numerosPares);