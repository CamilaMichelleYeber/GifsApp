import { Component} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-mostrar-resultados-gifs',
  templateUrl: './mostrar-resultados-gifs.component.html',
  styles: [
  ]
})
export class MostrarResultadosGifsComponent{

  constructor(private  gifs_Service:GifsService) { }
  //llamamos a la propiedad resultados de mi servicio
  get resultados(){
    return this. gifs_Service.resultado;
  }
}
