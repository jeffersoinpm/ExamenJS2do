import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IngredienteInterface} from "../interfaces/ingrediente.interface";

@Injectable()
export class IngredienteService {
  ingredienteSeleccionado:IngredienteInterface;
  constructor(private http:HttpClient){
  }
  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }
  obtenerIngredientes(){
    return this.http.get("http://localhost:1337/ingredientes",{headers:IngredienteService.getCommonHeaders()});
  }
}
