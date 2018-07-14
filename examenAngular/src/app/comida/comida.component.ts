import { Component, OnInit } from '@angular/core';
import {ComidaInterface} from "../interfaces/comida.interface";
import {IngredienteInterface} from "../interfaces/ingrediente.interface";
import {ComidaService} from "../services/comida.service";
import {IngredienteService} from "../services/ingrediente.service";

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {
  comida:ComidaInterface;
  ingredientes:Array<IngredienteInterface>;
  constructor(private ingredienteService:IngredienteService, private comidaService:ComidaService){
  }
  ngOnInit() {
    this.ingredienteService.obtenerIngredientes()
      .subscribe(
        (result:any)=>{
          this.ingredientes = result;
        }
      );
    this.comida=this.comidaService.comidaSeleccionada;
  }

}
