import * as readline from "readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obterNumeros(pergunta:string): Promise<number> {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            const numero = Number(resposta);
            
            if(isNaN(numero)){
                console.log("Valor inválido, digite um número!");
                obterNumeros(pergunta).then(resolve);
                //chama recursivamente
            } else {
                resolve(numero);
            }
            });
    });
    }

    //INFORMACAO => BANCO DE DADOS -> LISTAR -> DEVOLVER INFORMAÇÃO
    // 1ms                 2sm          1ms             1ms
    // ASSINCRONA 

async function calculadora(){
    const num1 = await obterNumeros("Digite o primeiro número");
    const num2 = await obterNumeros("Digite o segundo número ");

    rl.question("Qual operação deseja realizar? (+ - * /)", (operacao) => {
        let resultado: number;

        switch(operacao){
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "*":
            resultado = num1 * num2;
                break;
            case "/":
                if (num2 === 0){
                    rl.close();
                    return;
                }
            default:
                console.log("Operação inválida!");
                rl.close();
                return;

        }
        console.log(`O resultado é ${resultado}`);
        rl.close();
     
    });
}
calculadora();