import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Nevado } from '../../shared/model/nevado';

@Component({
  selector: 'app-tarjeta-nevado',
  templateUrl: './tarjeta-nevado.component.html',
  styleUrls: ['./tarjeta-nevado.component.css']
})
export class TarjetaNevadoComponent  {

  @Input() nevado!: Nevado;

  @Output() eliminar: EventEmitter<Nevado> = new EventEmitter<Nevado>()
  
  constructor(){
  }

  eliminarNevado(){
    this.eliminar.emit(this.nevado);
  }
  
}


