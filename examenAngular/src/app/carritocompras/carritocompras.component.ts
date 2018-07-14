import { Component, OnInit } from '@angular/core';
import {CarritoService} from "../services/carrito.service";

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css'],
  providers: [CarritoService]
})
export class CarritocomprasComponent implements OnInit {

  constructor(private carritoService:CarritoService) { }

  ngOnInit() {
    console.log(CarritoService.ingredientesDelCarrito.length);
  }

}
