class Veiculo {
    constructor(modelo,marca,cor,numeroRodas){
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }
}

class Automatico extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas){
        super(modelo, marca, cor, numeroRodas);
    }
    cambio(){
        this.cambio = "Automático"
        return this.cambio
    }
}
class Manual extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas){
        super(modelo, marca, cor, numeroRodas);
    }
    cambio(){
        this.cambio = "Manual"
        return this.cambio
    }
}
const aplicacao1 = new Automatico('Cronos Drive', 'Fiat', 'Cinza', 4)
aplicacao1.cambio()
const aplicacao2 = new Manual('Onix', 'Chevrolet', 'Azul', 4)
aplicacao2.cambio()

console.log(aplicacao1, aplicacao2)
