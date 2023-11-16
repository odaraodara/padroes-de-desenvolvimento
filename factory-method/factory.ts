// Product Abstract
interface Computador {
  toString(): void;
}

// Concrete Product - PC
class Pc implements Computador {
  private ram: number;
  private hdd: number;
  private cpu: number;

  constructor(ram: number, hdd: number, cpu: number) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
  }

  toString(): void {
    console.log(
      `PC - RAM: ${this.ram} GB | HD: ${this.hdd} GB | CPU:${this.cpu} GHz`
    );
  }
}

// Concrete Product -Server
class Server implements Computador {
  private ram: number;
  private hdd: number;
  private cpu: number;

  constructor(ram: number, hdd: number, cpu: number) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
  }

  toString(): void {
    console.log(
      `Server - RAM: ${this.ram} GB | HD: ${this.hdd} GB | CPU:${this.cpu} GHz`
    );
  }
}

// Creator Abstract
abstract class fabricaComputador {
  abstract factoryMethod(ram: number, hdd: number, cpu: number): Computador;
}


// Concrete Creator - PC
class fabricaPC extends fabricaComputador {
  factoryMethod(ram: number, hdd: number, cpu: number): Computador {
    return new Pc(ram, hdd, cpu);
  }
}

// Concrete Creator - Server
class fabricaServer extends fabricaComputador {
  factoryMethod(ram: number, hdd: number, cpu: number): Computador {
    return new Server(ram, hdd, cpu);
  }
}



// Cliente

const computador = new fabricaPC();
const pc = computador.factoryMethod(8, 500, 3);
pc.toString();

const computador2 = new fabricaServer();
const server = computador2.factoryMethod(8, 1000, 4.6);
server.toString();
