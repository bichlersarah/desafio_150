// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. 
//Utilize a função toFixed() para formatar os números.

function converterParaStringDuasCasasDecimais(arrayDeNumeros) {
    const numerosFormatados = arrayDeNumeros.map(numero => numero.toFixed(2));
    return numerosFormatados;
  }
  
  const numeros = [1.234, 5.678, 9.1011];
  const numerosFormatados = converterParaStringDuasCasasDecimais(numeros);
  
  console.log(numerosFormatados); 
  