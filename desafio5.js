// Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function.
//Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals ${var}. 
//Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".

const carreira = "engenheira de software";

function objetivoCarreira (nomeDaCarreira) {
    return `Meu objetivo de carreira é me tornar uma ${nomeDaCarreira}`;

}

console.log(objetivoCarreira(carreira));


//Com Arrow Function 
const carreira2 = "engenheira de software";

const objetivoCarreira2 = (nomeCarreira2) => {
    return `O meu objetivo de carreira é ser uma ${nomeCarreira2}`;
}

console.log(objetivoCarreira2(carreira2));