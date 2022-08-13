import { Component, OnInit } from '@angular/core';
import { NevadoService } from '../nevado/shared/nevado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  imagenes!: any[];
  
  constructor(private nevadoService: NevadoService){ }
  
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
ngOnInit() {
    this.nevadoService.getImages().then(images => this.imagenes = images);
}
}


