import {Component, OnInit} from '@angular/core';
import {IngredienteService} from "./services/ingrediente.service";
import {IngredienteInterface} from "./interfaces/ingrediente.interface";
import {ComidaInterface} from "./interfaces/comida.interface";
import {ComidaService} from "./services/comida.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [IngredienteService,ComidaService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ingredientes:Array<IngredienteInterface>;
  comidas:Array<ComidaInterface>;
  constructor(private ingredienteService:IngredienteService, private comidaService:ComidaService){
  }
  ngOnInit(){
    this.ingredienteService.obtenerIngredientes()
      .subscribe(
        (result:any)=>{
          this.ingredientes = result;
        }
      );
    this.comidaService.obtenerComidas()
      .subscribe(
        (result:any)=>{
          this.comidas=result;
        }
      );
  }

}
