import { Component, OnInit } from '@angular/core';
import {ComidaInterface} from "../interfaces/comida.interface";
import {ComidaService} from "../services/comida.service";
import {IngredienteService} from "../services/ingrediente.service";
import {IngredienteInterface} from "../interfaces/ingrediente.interface";

@Component({
  selector: 'app-ingrediente',
  templateUrl: './ingrediente.component.html',
  providers : [ComidaService,IngredienteService],
  styleUrls: ['./ingrediente.component.css']
})
export class IngredienteComponent implements OnInit {
  comida:ComidaInterface;
  ingrediente:IngredienteInterface;
  constructor(private comidaService:ComidaService, private ingredienteService:IngredienteService) { }

  ngOnInit() {
    this.comida=this.comidaService.comidaSeleccionada;
    this.ingrediente=this.ingredienteService.ingredienteSeleccionado;
  }
  agregarAlCarrito(ingrediente:IngredienteInterface){

  }

}
