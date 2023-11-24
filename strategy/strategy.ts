var readlineSync = require("readline-sync");

// interface Strategy

export interface Strategy {
  execute(num1: number, num2: number): number;
}

// Classes concretas que implementam a interface

export class Soma implements Strategy {
  execute(num1: number, num2: number): number {
    return num1 + num2;
  }
}

export class Subtracao implements Strategy {
  execute(num1: number, num2: number): number {
    return num1 - num2;
  }
}

export class Multiplicacao implements Strategy {
  execute(num1: number, num2: number): number {
    return num1 * num2;
  }
}

// Classe Calculadora

export class Calculadora {
  private num1: number;
  private num2: number;
  private operacao: Strategy;

  constructor(num1: number, num2: number, operacao: Strategy) {
    this.num1 = num1;
    this.num2 = num2;
    this.operacao = operacao;
  }

  calcular(): number {
    return this.operacao.execute(this.num1, this.num2);
  }
}

// Aplicação:

console.log(" --- Calculadora Strategy ---");

let num1 = readlineSync.questionInt("Digite o primeiro número: ");
let num2 = readlineSync.questionInt("Digite o segundo número: ");
let opcao = readlineSync.questionInt(`Digite o código da operação desejada
1 - soma
2 - subtração
3 - multiplicação
`);

let operacao: Strategy;

switch (opcao) {
  case 1:
    operacao = new Soma();
    break;
  case 2:
    operacao = new Subtracao();
    break;
  case 3:
    operacao = new Multiplicacao();
    break;
  default:
    console.error("Opção inválida");
    process.exit(1);
}

const calculadora = new Calculadora(num1, num2, operacao);
const resultado = calculadora.calcular();
console.log(`Resultado da operação: ${resultado}`);