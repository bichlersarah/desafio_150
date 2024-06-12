//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".

const animais = ["zebra", "leao-marinho", "abelha", "pinguim", "avestruz", "cachorro", "papagaio", "arara"];

const resultadoAnimais = animais.filter(animal => animal.startsWith("A"));


console.log(`Resultado: ${resultadoAnimais}`);

