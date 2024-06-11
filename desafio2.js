//Crie um script que simule um sistema de registro de produtos. O script deve ter três variáveis:

//var produto;
//let categoria;
//const codigoProduto;

//As variáveis produto e codigoProduto devem estar em um escopo global. 
//A variável categoria deve estar dentro de uma função. A execução do programa deve imprimir os detalhes do produto na ordem correta (com quebra de linha): 
//Produto Categoria Código do Produto.


const codigoProduto = "162453";

var produto = "Samsung S24";

function categoria () {
    let categoria = "smarthphoneSansung";
    return  categoria;
}

console.log(produto);
categoria(categoria());
console.log(codigoProduto);
console.log(`Produto: ${produto} \n Categoria: ${categoria()} \n Código do Produto: ${codigoProduto}`);
