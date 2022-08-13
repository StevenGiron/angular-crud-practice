import { EventEmitter, Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SwalService {

  clickConfirm!: EventEmitter<void>;
  clickCancel!: EventEmitter<void>;

  constructor() { }



  success(title: string, text: string){
    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      position: 'center',
      showConfirmButton: false,
      timer: 1500
    });
  }

  iniciarObservablesConfirm(): void {
    this.clickConfirm = new EventEmitter();
    this.clickCancel = new EventEmitter();
  }

    
  confirm(
    title = '',
    text ='',
    icon = 'warning',
    confirmButtonText = 'Si',
    cancelButtonText = 'No',
    {
      clickConfirm =() =>{
      }, clickCancel =() =>{

      }
    }= {},
    showCancelButton = true
  ): Promise<any> {
    this.iniciarObservablesConfirm();
    return Swal.fire({
      title,
      text,
      icon: icon as SweetAlertIcon,
      showCancelButton,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText,
      cancelButtonText
    }).then(result =>{
      if(result.value){
        this.clickConfirm.subscribe(()=>clickConfirm());
        this.clickConfirm.emit();
        this.clickConfirm.unsubscribe();
      }else{
        this.clickCancel.subscribe(() => clickCancel());
        this.clickCancel.emit();
        this.clickCancel.unsubscribe();
      }
    })
  }
   
  
  
  }


