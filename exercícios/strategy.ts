var readlinesync = require('readline-sync')

//INTERFACE STRATEGY
interface Strategy {
    execute(numero1: number, numero2: number): number
}

//STRATEGY CONCRETE SOMA
class Soma implements Strategy {
    public execute(numero1: number, numero2: number): number {
       return parseInt(numero1.toString()) + parseFloat(numero2.toString())
    }
}

//STRATEGY CONCRETE SUBTRAÇÃO
class Subtracao implements Strategy {
    public execute(numero1: number, numero2: number): number {
        return numero1 - numero2
    }
}

//STRATEGY CONCRETE MULTIPLICAÇÃO
class Multiplicacao implements Strategy {
    public execute(numero1: number, numero2: number): number {
        return numero1 * numero2
    }
}


//CONTEXT CLASS
class Calculadora {

    calcular(operacao: Strategy) {
        return operacao.execute(num1, num2)
    }
}


//CÓDIGO DO CLIENTE

let num1: number = readlinesync.question('insira o primeiro numero: \n')
let num2: number = readlinesync.question('insira o segundo numero: \n')
let operadorMatematico: string = readlinesync.question('informe a operacao que deseja realizar: [+] [-] [x]: \n')

const fazerConta = new Calculadora()

if (operadorMatematico == '+') {
    console.log(`${num1} + ${num2} = ${fazerConta.calcular(new Soma())}`)
} else if (operadorMatematico == '-') {
    console.log(`${num1} - ${num2} = ${fazerConta.calcular(new Subtracao())}`)
} else if (operadorMatematico == 'x') {
    console.log(`${num1} x ${num2} = ${fazerConta.calcular(new Multiplicacao())}`)
} else {
    throw Error('ERR04 - Operação inválida')
}

