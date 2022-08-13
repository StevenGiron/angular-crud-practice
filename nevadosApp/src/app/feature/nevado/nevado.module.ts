import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



import { NevadoComponent } from './components/nevado/nevado.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CrearComponent } from './components/crear/crear.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NevadoRoutingModule } from './nevado-routing.module';
import { TarjetaNevadoComponent } from './components/tarjeta-nevado/tarjeta-nevado.component';
import { SharedModule } from '../../shared/shared.module';






@NgModule({
  declarations: [
    NevadoComponent,
    ListadoComponent,
    CrearComponent,
    BuscarComponent,
    TarjetaNevadoComponent
  ],
  imports: [
    CommonModule,
    NevadoRoutingModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class NevadoModule { }
