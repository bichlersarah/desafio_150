//Crie um script que declare uma variável const base e atribua a ela um valor numérico. 
//Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.

const base = 52;

function areaTriangulo (altura) {
    const area = (base * altura) / 2;
    return area;
}

const alturaTriangulo = 5;
const areaCalculada = areaTriangulo(alturaTriangulo);
console.log("A área do triângulo com base", base, "e altura", alturaTriangulo, "é:", areaCalculada);


