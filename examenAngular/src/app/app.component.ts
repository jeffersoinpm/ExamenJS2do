import {Component, OnInit} from '@angular/core';
import {CarritoService} from "./services/carrito.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CarritoService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  carritoNumero:number;
  constructor(private carritoService:CarritoService,private _router: Router){
  }
  ngOnInit(){
    this.carritoNumero=CarritoService.ingredientesDelCarrito.length;
  }
  llamarCarrito(){
    this.carritoNumero=CarritoService.ingredientesDelCarrito.length;
    const url = ['/carrito'];
    this._router.navigate(url);
  }
}
