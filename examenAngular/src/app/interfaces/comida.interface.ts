import {IngredienteInterface} from "./ingrediente.interface";

export interface ComidaInterface {
  nombrePlato: string,
  descripcionPlato: string,
  nacionalidad: string,
  numeroPersonas: number,
  picante: boolean;
  imagenUrl: string;
  ingredientes : IngredienteInterface[];
}
