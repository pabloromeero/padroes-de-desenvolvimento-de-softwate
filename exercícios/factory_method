class computador{
    static criarcomputador(){
        return{
            ram : 4+'GB',
            hd : 500+'GB',
            cpu : 3.10+'Ghz'
        }
    }
}
class servidor{
    static criarservidor(){
        return{
            ram : 2+'GB',
            hd : 120+'GB',
            cpu : 1.0+'Ghz'
        }
    }
}
class fabrica{
    fabricar(type){
        if(type==='computador'){
            console.log(computador.criarcomputador())
        };
        if(type==='servidor'){
        console.log(servidor.criarservidor())
        }   
    }
}
criando = new fabrica()
criando.fabricar('computador')
criando.fabricar('servidor')
