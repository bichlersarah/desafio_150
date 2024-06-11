//Refaça o exercício anterior utilizando .map(). Para criar um array com números de 1 a 100:

const numeros = Array.from({ length: 100 }, (_, index) => index + 1);

const numerosTransformados = numeros.map(i => {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizBuzz");
    } else if (i % 3 == 0 ) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
});