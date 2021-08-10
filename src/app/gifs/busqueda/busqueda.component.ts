import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  @ViewChild('txtBusqueda') txtBusqueda!:ElementRef<HTMLInputElement>;

  buscar(){
    //mostramos los valores en consola
    const valor =this.txtBusqueda.nativeElement.value;
    console.log(valor);

    //limpiamos la caja de busqueda
    this.txtBusqueda.nativeElement.value= "";
  }
}
