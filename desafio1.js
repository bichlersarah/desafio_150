//Crie um script que tenha três variáveis 
// var nome - let sobrenome - const cpf

const cpf = "123.123.123-12";

var nome = "Sarah";

function sobreNome () {
    let sobreNome = "Bichler";
    return sobreNome;
}

console.log(nome);
sobreNome();
console.log(cpf);
console.log(`O nome é: ${nome} ${sobreNome}. Seu cpf é o: ${cpf}`);