import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';
import {InputTextModule} from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';






@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    GalleriaModule,
    TabMenuModule,
    InputTextModule
  ]
})
export class PrimengModule { }
