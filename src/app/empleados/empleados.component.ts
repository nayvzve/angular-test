import{ Component } from '@angular/core';
import{ Empleado } from './empleado';

@Component({
    selector: 'empleados',
    templateUrl: './empleados.component.html',
    
})
 
 export class EmpleadosComponent{
    public nombre_componente = 'Empleados'; 
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajadorExterno:boolean;
    public color:string;
    public SelectedColor:string;
    
    constructor(){
        this.empleado = new Empleado('Nayvir' , 24, false);
        this.trabajadores = [
            new Empleado('Jose' , 26, true),
            new Empleado('Nayvir' , 24, true),
            new Empleado('Martin' , 55, true)
        ];
        
        this.trabajadorExterno = false;
        this.color= 'green';
        this.SelectedColor= '#ccc';
    } 
    ngOnInit(){ 
    }
    cambiarTrabajador(valor){
        this.trabajadorExterno = valor;
    }
 }