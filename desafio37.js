//Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja invertida.
// Utilize a função reverse() para inverter as strings.

const evolucao = ["bulbasaur", "ivysaur", "venusaur"];

const pokemonEvolucao = evolucao.map(evolucoes => evolucao.reverse());

console.log(pokemonEvolucao);