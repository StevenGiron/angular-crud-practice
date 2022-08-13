import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Nevado } from '../../shared/model/nevado';
import { NevadoService } from '../../shared/nevado.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  nevado: Nevado ={
    nombre: '',
    ubicacion:'',
    continente:'',
    altitud:0,
    actividad_volcanica:'',
    alt_img:''
  }

  constructor(private nevadoService: NevadoService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.nevadoService.getNevadoID(id))
      )
      .subscribe((nevado)=>{this.nevado = nevado}), console.log(this.nevado);
  }
  crear() {
    
    if(this.nevado.nombre.trim().length === 0){
      return;
    }

    if (this.nevado.id){
      this.nevadoService.editarNevado(this.nevado)
      .subscribe(()=>{
        this.router.navigate(['/nevado/listado'])
      })
      
    }else{
      this.nevadoService.crearNevado(this.nevado)
        .subscribe(() =>{
          this.router.navigate(['/nevado/listado'])
      })
    }

  }
    
}
