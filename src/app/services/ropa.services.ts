import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
    
    public nombrePrenda = 'Pantalones Vaqueros';
    public ColeccionRopa = ['Pantalones Blancos' , 'Camisa Roja'];

    prueba(nombrePrenda){
        return nombrePrenda;
    }
    addRopa(nombrePrenda:string):Array<string>{
        this.ColeccionRopa.push(nombrePrenda);
        return this.getRopa();
    }
    getRopa():Array<string>{
        return this.ColeccionRopa;
    }

    delPrenda(index:number){
        this.ColeccionRopa.splice(index, 1);
        return this.getRopa();
    }

}