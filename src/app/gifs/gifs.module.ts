import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MostrarResultadosGifsComponent } from './mostrar-resultados-gifs/mostrar-resultados-gifs.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    MostrarResultadosGifsComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
