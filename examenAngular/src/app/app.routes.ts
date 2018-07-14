import {HomeComponent} from "./home/home.component";
import {Routes} from "@angular/router";
import {ComidaComponent} from "./comida/comida.component";
import {CarritocomprasComponent} from "./carritocompras/carritocompras.component";
import {IngredienteComponent} from "./ingrediente/ingrediente.component";


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent },
  {
    path: 'ingrediente',
    component: IngredienteComponent },
  {
    path: 'comida',
    component: ComidaComponent,
    children: [{
      path: 'ingrediente',
      component: IngredienteComponent
    }]
  },
  {
    path: 'carrito',
    component: CarritocomprasComponent}
];
