export interface IPatos {
    grasnar(): void
}

export interface IGalinhas {
    cantar(): void
}


export class Pato implements IPatos{
    grasnar(): void{
        console.log("Quá-Quá-Quá")
    }
}

export class Galinha implements IGalinhas{
    cantar(): void {
        console.log("cócóricóóóó");
    }
}

// Adaptador de Pato para Galinha

export class AdaptadorPato implements IGalinhas{
    private pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    cantar(): void {
        console.log("O pato-galinha faz: cócóri..");
        this.pato.grasnar()
    }
}

// Demo do Adaptador de Pato

class AdaptadorPatoDemo {
    static demo():void{
        const pato = new Pato;
    
        const patoAdaptado = new AdaptadorPato(pato);
        patoAdaptado.cantar();
    }
}

AdaptadorPatoDemo.demo()







