import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ComidaInterface} from "../interfaces/comida.interface";

@Injectable()
export class ComidaService {
  comidaSeleccionada:ComidaInterface;
  constructor(private http: HttpClient) {
  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  obtenerComidas() {
    return this.http.get("http://localhost:1337/comida", {headers: ComidaService.getCommonHeaders()});
  }

}
