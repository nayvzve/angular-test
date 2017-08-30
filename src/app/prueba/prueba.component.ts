import{ Component } from '@angular/core';
@Component({
    selector: 'prueba',
    templateUrl: './prueba.component.html',
    
})
 export class PruebaComponent {
    public nombre_componente = 'Componente de Prueba';
    public lista = 'Naranja, Fresas, Patilla '; 
    public nombre:string ;
    public edad:number ;
    public mayores:boolean;
    public trabajos:Array<any> = ['Desarrollador', 62, 'Contador'];
    comodin:any = false;

    constructor() {
        this.nombre  = " Nay";
        this.edad  = 24;
        this.mayores  = true;
    }
    
    ngOnInit(){  
        this.ConcatName();
        this.fistFunction(this.nombre);
        
        //Variables 
        var uno = 1; 
        var dos = 8;
        if(uno == 1){
            let uno = 99;
            console.log('uno', uno);
            
        }
            console.log('uno', uno);
    }
    ConcatName(){
        this.nombre += " Zerpa";
    }
    fistFunction(nombre){ 
    }
}