import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite um número limite", (inputNumero) => {
    const Limite = parseInt(inputNumero);
    let soma = 0;
    let i = 1;

    while(i <= Limite){
        soma += i;
        i++;
    }
    console.log("A soma dos números de 1 até ", Limite, "é" , soma);
    console.log(`A soma dos números de 1 até ${Limite} é ${soma}`);
    rl.close();
})