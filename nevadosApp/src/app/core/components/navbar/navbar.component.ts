import { Component, Input, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Home', routerLink: ['/home'], icon: 'pi pi-fw pi-home'},
      {label: 'Montañas', routerLink: ['/nevado', 'listado'], icon: 'pi pi-fw pi-home'},
      {label: 'Agregar Montaña', routerLink: ['/nevado', 'crear'], icon: 'pi pi-fw pi-home'},
  ];
  
  }
}
