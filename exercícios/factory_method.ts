abstract class Computador {
    constructor(
        protected _hdd:number,
        protected _cpu:number,
        protected _ram:number,
        protected _tipo:string
    ) {}


    get hdd (){return this._hdd};
    get cpu (){return this._cpu};
    get ram (){return this._ram};
    get tipo (){return this._tipo};

    static factory(){

    }

    toString(){

    }

}

class Pc extends Computador{
    constructor(
        protected _hdd:number,
        protected _cpu:number,
        protected _ram:number,
        protected _tipo:string
    ){
        super(_hdd,_cpu,_ram,_tipo);
    }

    get hdd (){return this._hdd};
    get cpu (){return this._cpu};
    get ram (){return this._ram};
    get tipo (){return this._tipo};

    static factory(){
        return new Pc(512,64,16,'PC')
    }
    
    toString(){
        console.log('HDD:'+this._hdd);
        console.log('CPU'+this._cpu+'GHz');
        console.log('RAM:'+this._ram);
        console.log('Tipo:'+this._tipo);
    }
}



class Server extends Computador{
    constructor(
        protected _hdd:number,
        protected _cpu:number,
        protected _ram:number,
        protected _tipo:string
    ){
        super(_hdd,_cpu,_ram,_tipo);
    }

    get hdd (){return this._hdd};
    get cpu (){return this._cpu};
    get ram (){return this._ram};
    get tipo (){return this._tipo};

    static factory(){
        return new Server(300,32,8,'Notebook')
    }

    toString(){
        console.log('HDD:'+this._hdd);
        console.log('CPU'+this._cpu+'GHz');
        console.log('RAM:'+this._ram);
        console.log('Tipo:'+this._tipo);
    }

}

let pc = Pc.factory();
