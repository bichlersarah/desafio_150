//Crie um script que declare um array de números e utilize a função map() para criar um novo array onde cada número seja multiplicado por 2. 
//Imprima o novo array.

const numeros = [9, 16, 43, 28]; 

function transformarNumeros(dobrar)  {
    return dobrar * 2;
}

const numerosDobrados = numeros.map(transformarNumeros);

console.log(`Os números transformados ficaram em: ${numerosDobrados}`);