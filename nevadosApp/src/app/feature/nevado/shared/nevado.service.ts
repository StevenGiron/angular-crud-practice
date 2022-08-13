import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nevado } from './model/nevado';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NevadoService {
  

  constructor( private http: HttpClient ) {}
  
  getNevados():Observable<Nevado[]>{
    return this.http.get<Nevado[]>(`${environment.endpoint}/nevados`)
  }
  
  
  getNevadoID(id:string): Observable<Nevado>{
    return this.http.get<Nevado>(`${environment.endpoint}/nevados/${id}`)
    
  }

  crearNevado( nevado: Nevado ):Observable<Nevado>{
    return this.http.post<Nevado>(`${environment.endpoint}/nevados`, nevado)
  }

  editarNevado( nevado: Nevado ):Observable<Nevado> {
    return this.http.put<Nevado>(`${environment.endpoint}/nevados/${nevado.id}`, nevado)
  }

  eliminar(nevado: Nevado): Observable<any>{
    return this.http.delete<any>(`${environment.endpoint}/nevados/${nevado.id}`)
  }

  getImages() {
    return this.http.get<any>('assets/imagenes/fotos.json')
      .toPromise()
      .then(res => res.data)
      .then(data => { return data; });
    }

}
