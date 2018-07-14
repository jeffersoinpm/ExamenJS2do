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
@NgModule({
  declarations: [
    AppComponent,
    ComidaComponent,
    HomeComponent,
    IngredienteComponent,
    CarritocomprasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
