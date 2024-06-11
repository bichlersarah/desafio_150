//4 - Faça um script que contenha uma função objetivoDoCurso(tecnologia). 
//A função deve retornar a string: “Meu objetivo é aprender [parametro tecnologia]”. 
//Fora da função, defina uma const tecnologia que possua o valor “React”. 
//Chame a execução da função para que a mesma retorne: “Meu objetivo é aprender React”. Faça um exemplo com function e outro com arrow function.

const tecnologia = "React";


function objetivoDoCurso(nomeDaTecnologia) {
   return `O meu objetivo é aprender: ${nomeDaTecnologia}`
}

console.log(objetivoDoCurso(tecnologia));



// Exemplo com arrow function 
const Tecnologia2 = "React";

const objetivoDoCurso2 = (nomeDaTecnologia2) => {

    return `O meu objetivo no curso é aprender ${nomeDaTecnologia2}`;

}

console.log(objetivoDoCurso2(Tecnologia2));