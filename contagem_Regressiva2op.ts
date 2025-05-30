import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite um Número para iniciar a contagem ", (inputNumero) => {
    const numero = parseInt(inputNumero);

    if (numero < 0 || isNaN(numero)){
        console.log("Digite um número válido ");
    } else {
        console.log("Contagem regressiva do: ", numero);
        let i = numero;
        while (i >= 0 ){
            console.log(i);
            i--;
        }
    }
    rl.close();
});