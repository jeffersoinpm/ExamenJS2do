import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ComidaComponent } from './comida/comida.component';
import { HomeComponent } from './home/home.component';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { CarritocomprasComponent } from './carritocompras/carritocompras.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
@NgModule({
  declarations: [
    AppComponent,
    ComidaComponent,
    HomeComponent,
    IngredienteComponent,
    CarritocomprasComponent,
    BarraBusquedaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes,
      {
        useHash: true}),
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
