//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 10.

function filtrarMaioresQueDez(numero) {
    return numero > 10;
  }
  
  const numeros = [5, 6, 7, 9, 10, 12, 14, 15, 17, 18];
  const numerosMaioresQueDez = numeros.filter(filtrarMaioresQueDez);
  
  console.log(numerosMaioresQueDez);
  