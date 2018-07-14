import { Component, OnInit } from '@angular/core';
import {ComidaInterface} from "../interfaces/comida.interface";
import {IngredienteInterface} from "../interfaces/ingrediente.interface";
import {ComidaService} from "../services/comida.service";
import {IngredienteService} from "../services/ingrediente.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css'],
  providers: [IngredienteService,ComidaService]
})
export class ComidaComponent implements OnInit {
  comida:ComidaInterface;
  ingredientes:Array<IngredienteInterface>;
  constructor(private ingredienteService:IngredienteService, private comidaService:ComidaService, private _router: Router){
  }
  ngOnInit() {
    this.comida=ComidaService.comidaSeleccionada;
    this.ingredientes = this.comida.ingredientes;
  }
  seleccionarIngrediente(ingrediente:IngredienteInterface){
    IngredienteService.ingredienteSeleccionado=ingrediente;
    const url = ['/ingrediente'];
    this._router.navigate(url);
  }

}
