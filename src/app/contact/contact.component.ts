import{ Component } from '@angular/core'; 
import { Router, ActivatedRoute, Params } from '@angular/router'; //para tomar parametros 

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
    
})
export class ContactComponent {
    public titulo = "Pagina de Contacto";
    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){} 
    ngOnInit(){
        this._route.params.forEach((params: Params)=>{
            console.log('params', params);
            this.parametro = params['id'];
        });
    }
    redirectPage(){ 
        this._router.navigate(['/Contact', 'google.com']);
    }
    redirectHome(){ 
        this._router.navigate(['/Index']);
    }
}
 