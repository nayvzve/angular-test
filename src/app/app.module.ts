import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component'; 
import { EmpleadosComponent } from './empleados/empleados.component'; 
import { IndexComponent } from './index/index.component'; 
import { ContactComponent } from './contact/contact.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    EmpleadosComponent,
    IndexComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
