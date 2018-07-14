import {Injectable} from "@angular/core";
import {IngredienteInterface} from "../interfaces/ingrediente.interface";

@Injectable()
export class CarritoService {
  static ingredientesDelCarrito:Array<IngredienteInterface>=[];
  constructor(){}
}
