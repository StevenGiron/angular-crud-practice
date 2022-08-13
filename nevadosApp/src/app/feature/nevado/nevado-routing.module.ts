import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NevadoComponent } from './components/nevado/nevado.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CrearComponent } from './components/crear/crear.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [
 {
   path: '',
   component: NevadoComponent,
   children: [
     {
      path: 'listado',
      component: ListadoComponent
     },
     {
       path: 'crear',
       component: CrearComponent
     },
     {
       path: 'editar/:id',
       component: CrearComponent
     },
     {
       path: 'buscar',
       component: BuscarComponent
     },
     {
       path: '**',
       redirectTo: 'listado'
     }
   ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NevadoRoutingModule { }
