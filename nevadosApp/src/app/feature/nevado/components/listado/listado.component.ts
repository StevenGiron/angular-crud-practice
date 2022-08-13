import { Component, OnInit } from '@angular/core';
import { NevadoService } from '../../shared/nevado.service';
import { Nevado } from '../../shared/model/nevado';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { SwalService } from '../../../../core/services/swal.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  

  nevados: Nevado[] =[];


  constructor(private nevadoService: NevadoService,
              private router: Router,
              private swalService: SwalService) {}

  
  ngOnInit(): void {
    this.nevadoService.getNevados()
      .subscribe((nevados) => { this.nevados = nevados });
    }

  eliminarNevado(nevado: Nevado){
    this.nevadoService.eliminar(nevado)
      .subscribe(()=> {this.swalService.success('Eliminado!', 'Nevado Eliminado Correctamente');
    this.nevadoService.getNevados()
      .subscribe((nevados) => {this.nevados = nevados})
    })

  }
}
      


    
    // .pipe(
    //   switchMap(()=> this.nevadoService.getNevados())
    // )
    // .subscribe((nevados) => {this.nevados = nevados})

