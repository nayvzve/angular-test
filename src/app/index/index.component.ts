import{ Component } from '@angular/core'; 
import{ RopaService } from '../services/ropa.services'; 

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    providers: [RopaService]
    
})
export class IndexComponent {
    
    public titulo = "Pagina Principal";
    public ListadoRopa:Array<string>;
    public prendaGuardar:string;

    constructor(
        private _ropaService: RopaService
    ){}

    ngOnInit(){ 
        this.ListadoRopa = this._ropaService.getRopa();
        console.log('this.ListadoRopa ', this.ListadoRopa );
        console.log('this._ropaService.prueba(Camiseta);', this._ropaService.prueba('Camiseta'));
    }
    guardarPrenda(){
        this._ropaService.addRopa(this.prendaGuardar);
        this.prendaGuardar = null;
    }
    eliminarPrenda(index:number){
         this._ropaService.delPrenda(index);
    }
}
 