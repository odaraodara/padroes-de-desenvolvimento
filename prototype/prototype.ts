interface Cloneable{
    clone(): Cloneable;
}

// implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone() e represent()

abstract class Veiculo implements Cloneable{
    protected modelo: string;
    protected marca: string;
    protected cor: string;
    protected numRodas: number;

    constructor(modelo:string, marca:string, cor:string,numRodas:number){
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numRodas = numRodas
    }

    abstract clone(): Veiculo;

    abstract represent(): void;
}

// crie pelo menos duas subclasses, que acrescentem um ou mais atributos

class Carro extends Veiculo{
    private numPortas: number;

    constructor (modelo:string, marca:string, cor:string,numRodas:number, numPortas:number){
        super(modelo,marca,cor,numRodas)
        this.numPortas = numPortas;
    }

    clone(): Carro{
        return new Carro(this.modelo, this.marca, this.cor, this.numRodas, this.numPortas);
    }

    represent(): void {
        console.log(`Carro - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numRodas}, Número de Portas: ${this.numPortas}`);
    }
}

class Bicicleta extends Veiculo{
    private numAro: number;

    constructor(modelo:string, marca:string, cor:string,numRodas:number,numAro:number){
        super(modelo,marca,cor,numRodas)
        this.numAro = numAro
    }

    clone(): Bicicleta{
        return new Bicicleta(this.modelo, this.marca,this.cor,this.numRodas,this.numAro);
    }

    represent():void{
        console.log(`Bicicleta - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numRodas}, Número do aro: ${this.numAro}`);
    }
}

// Desenvolva uma classe Aplicação que deve criar um Array com 6 veículos(dos dois tipos) utilizando o método clone para preencher o array
// Na classe Aplicação, implemente um método que retorne um array do mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos
// No fim, imprima na tela o retorno do represent de cada elemento desse novo array de clones de veículos

class Aplicacao {

    private veiculos: Veiculo[] = []

    constructor(){
        const carro1 = new Carro("Sedan","Toyota","Preto",4,4);
        const carro2 = new Carro("Fusca","Volkswagen", "Azul", 4,2);
        const carro3 = new Carro("SUV", "Honda", "Preto", 4, 5);

        this.veiculos.push(carro1.clone());
        this.veiculos.push(carro2.clone());
        this.veiculos.push(carro3.clone());

        const bicicleta1 = new Bicicleta("Mountain Bike", "Caloi", "Verde", 2, 26);
        const bicicleta2 = new Bicicleta("Speed", "Trek", "Vermelha", 2, 28);
        const bicicleta3 = new Bicicleta("Passeio", "Soul", "Branca", 2, 24);

        this.veiculos.push(bicicleta1.clone());
        this.veiculos.push(bicicleta2.clone());
        this.veiculos.push(bicicleta3.clone());

    }

    clonarArray(): Veiculo[] {
        const cloneVeiculos: Veiculo[] = []
        for(const veiculo of this.veiculos){
            const clone = veiculo.clone();
            cloneVeiculos.push(clone);
            clone.represent();
        }
        return cloneVeiculos;
    }
   
}

const app = new Aplicacao();
app.clonarArray();