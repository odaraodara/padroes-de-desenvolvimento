// protocolo
export interface Sanduiche {
    getProduto(): string;
    getPreco(): number;
}


// produto 
export class FrangoAssado implements Sanduiche{
    private nome = 'Sandíche de Frango Assado';
    private preco = 4.5;

    getProduto(): string {
        return this.nome
    }

    getPreco(): number {
        return this.preco
    }
}

// decorator
export class Decorator implements Sanduiche{
    constructor(protected produto: Sanduiche){}

    getProduto(): string {
        return this.produto.getProduto()
    }

    getPreco(): number {
        return this.produto.getPreco()
    }
}


// ingredientes adicionais
export class AdicionalPepperoni extends Decorator{

    getProduto(): string {
        return this.produto.getProduto() + ', Pepperoni'
    }
    getPreco(): number {
        return this.produto.getPreco() + 0.99;
    }
}

export class AdicionalMussarelaRalado extends Decorator{

    getProduto(): string {
        return this.produto.getProduto() + ', Queijo Mussarela ralado'
    }
    getPreco(): number {
        return this.produto.getPreco() + 2;
    }
}


// main

const pedido = new AdicionalMussarelaRalado(new AdicionalPepperoni(new FrangoAssado));
console.log(`${pedido.getProduto()} custa: R$ ${pedido.getPreco()}`);





