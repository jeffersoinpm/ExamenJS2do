import {Component, OnInit} from '@angular/core';
import {CarritoService} from "./services/carrito.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CarritoService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  carritoNumero:number;
  constructor(private carritoService:CarritoService){
  }
  ngOnInit(){
    this.carritoNumero=CarritoService.ingredientesDelCarrito.length;
  }

}
