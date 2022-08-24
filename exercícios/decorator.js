class FrangoAssado {
    constructor() {
        this.nome = 'Sanduíche de Frango Assado '
    }
    getNome() {
        return 'Sanduíche de Frango Assado '
    }
    getValor() {
        return 4.50
    }
}
class Pepperoni extends FrangoAssado {
    constructor() {
        super();
    }
    getNome() {
        return super.getNome() + '+ Adicional Pepperoni ' 
    }
    getValor() {
        return 0.99 + super.getValor()
    }
}
class QueijoMussarelaRalado extends Pepperoni {
    constructor() {
        super();
    }
    getNome() {
        return super.getNome() + '+ Adicional Queijo Mussarela Ralado'
    }
    getValor() {
        return 2.00 + super.getValor()
    }
}

let Sanduíche = new QueijoMussarelaRalado()
console.log(Sanduíche.getNome(),':', Sanduíche.getValor())
