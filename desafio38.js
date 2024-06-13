//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que terminam com a letra "a".

function filtrarPorTerminoA(listaDeItens) {
    const itensComA = listaDeItens.filter(item => item.endsWith("a"));
    return itensComA;
  }
  
  const listaDeCompras = ["Arroz", "Beterraba", "Cenoura", "Feijão", "Feijão", "Lentilha"];
  
  const terminamComA = filtrarPorTerminoA(listaDeCompras);
  
  console.log(`Os alimentos que terminam com a letra a são: ${terminamComA}`);
  