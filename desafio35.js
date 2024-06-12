//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 1.

function decrementarNumeros(numeros) {
    const numerosDecrescidos = numeros.map(numero => numero - 1);
    return numerosDecrescidos;
  }
  
  const arrayOriginal = [10, 5, 2, -1];
  const arrayDecrescido = decrementarNumeros(arrayOriginal);
  
  console.log(`Array original: ${arrayOriginal}`);
  console.log(`Array decrescido: ${arrayDecrescido}`);
  