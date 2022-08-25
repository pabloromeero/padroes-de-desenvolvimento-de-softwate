class AdaptadorPato {
    falarPato() {
        return 'QuackQuack'
    }
    voar() {
        return 'Estou voando!'
    }
}

class Galinha extends AdaptadorPato {
    falarGalinha() {
        return 'Cocoricó'
    }
    voar() {
        return 'Estou tentando voar!'
    }
}

const pato = new Galinha();
console.log(pato.falarGalinha())
