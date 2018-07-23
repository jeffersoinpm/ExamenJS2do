import { Component, OnInit } from '@angular/core';
import {ComidaInterface} from "../interfaces/comida.interface";
import {ComidaService} from "../services/comida.service";
import {IngredienteInterface} from "../interfaces/ingrediente.interface";
import {IngredienteService} from "../services/ingrediente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [IngredienteService,ComidaService]
})
export class HomeComponent implements OnInit {
  ingredientes:Array<IngredienteInterface>;
  comidas:Array<ComidaInterface>;
  datoABuscar;
  constructor(private ingredienteService:IngredienteService, private comidaService:ComidaService,private _router: Router){
  }
  ngOnInit(){
    this.ingredienteService.obtenerIngredientes()
      .subscribe(
        (result:any)=>{
          this.ingredientes = result;
        }
      );
    this.comidaService.obtenerComidas()
      .subscribe(
        (result:any)=>{
          this.comidas=result;
        }
      );
  }
  cargarDatosbusqueda() {
    this.ingredienteService.buscarIngredientes(this.datoABuscar).subscribe(
      (result: any[]) => {
        this.ingredientes = result;
      }
    );
    this.comidaService.buscarComidas(this.datoABuscar).subscribe(
      (result: any[]) => {
        this.comidas = result;
      }
    );
  }
  seleccionarComida(comida:ComidaInterface){
    console.log(comida);
    ComidaService.comidaSeleccionada=comida;
    const url = ['/comida'];
    this._router.navigate(url);
  }
}
