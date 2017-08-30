import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar Componentes 
import { EmpleadosComponent } from './empleados/empleados.component';
import { PruebaComponent } from './prueba/prueba.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'Empleados', component: EmpleadosComponent },
    { path: 'Prueba', component: PruebaComponent },
    { path: 'Contact', component: ContactComponent },
    { path: 'Contact/:id', component: ContactComponent }, //para pasar parametros por url
    { path: '**', component: IndexComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);