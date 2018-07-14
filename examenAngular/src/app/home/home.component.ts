import { Component, OnInit } from '@angular/core';
import {ComidaInterface} from "../interfaces/comida.interface";
import {ComidaService} from "../services/comida.service";
import {IngredienteInterface} from "../interfaces/ingrediente.interface";
import {IngredienteService} from "../services/ingrediente.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ingredientes:Array<IngredienteInterface>;
  comidas:Array<ComidaInterface>;
  constructor(private ingredienteService:IngredienteService, private comidaService:ComidaService){
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
  seleccionarComida(comida:ComidaInterface){
    console.log(comida);
    this.comidaService.comidaSeleccionada=comida;
  }
}
