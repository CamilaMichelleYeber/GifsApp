import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent{
  
  //con la inyeccion lista, usamos un getter que retorne 
  get historial(){
    return this.gifsService.historial;
  }
  

  //inyectamos el servicio
  constructor(private gifsService:GifsService){  
  }
  
 clickHistorial(click: string){
    
  this.gifsService.historialGifs(click);//muestra los gifs al hacer click en los resultados almacenados en el historial 
 }
 
}
