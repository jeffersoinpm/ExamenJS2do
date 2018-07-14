import { Component, OnInit } from '@angular/core';
import {CarritoService} from "../services/carrito.service";
import {IngredienteService} from "../services/ingrediente.service";
import {IngredienteInterface} from "../interfaces/ingrediente.interface";

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css'],
  providers: [CarritoService]
})
export class CarritocomprasComponent implements OnInit {
  ingredientesComprados:Array<IngredienteInterface>;
  constructor(private carritoService:CarritoService) { }

  ngOnInit() {
    this.ingredientesComprados=CarritoService.ingredientesDelCarrito;
  }

}
