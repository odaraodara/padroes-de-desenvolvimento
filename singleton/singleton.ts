var readlineSync = require('readline-sync');

export class SistemaSeguranca {
  private static _instance: SistemaSeguranca | null = null;
  private senha: string = "SenhaSuperSecreta";

  private constructor() {}

  static get instance(): SistemaSeguranca {
    if (SistemaSeguranca._instance === null) {
      SistemaSeguranca._instance = new SistemaSeguranca();
    }
    return SistemaSeguranca._instance;
  }

  acessarBaseSecreta(): void {
    const senhaInserida = readlineSync.question("Digite a senha: ");
    if (senhaInserida === this.senha) {
      console.log("Acesso Concedido");
    } else {
      console.log("Acesso Negado");
    }
  }
}

const sistemaSeguranca = SistemaSeguranca.instance;
sistemaSeguranca.acessarBaseSecreta()


