import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  @ViewChild('txtBusqueda')    txtBusqueda!              :  ElementRef<HTMLInputElement>;
  //        referencia local    propiedad del decorador       tipo de dato

  constructor(private gifs_Service:GifsService){
  }

  buscar(){ 
    //mostramos los valores en consola
    const valor =this.txtBusqueda.nativeElement.value;
   
    //evitar que se guarden espacios vacios
    if (valor.trim().length === 0) {
      return;
      
    }
   
    this.gifs_Service.historialGifs(valor);

    //limpiamos la caja de busqueda
    this.txtBusqueda.nativeElement.value= "";
  }
}
