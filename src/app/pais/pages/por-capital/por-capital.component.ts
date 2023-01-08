import { Component } from '@angular/core';
import { Countries } from '../../interfaces/pais';

import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino:string = "";
  error:boolean=false;
  paisesarr:Countries[]=[];

  constructor(private paisService:PaisServiceService){}
  buscar(termino:string){
    this.error = false;
    this.termino = termino
    console.log(this.termino)
    //this.paisService.buscarPais(this.termino)
    
    this.paisService.buscarCapital(this.termino)
    .subscribe({
      next:pais => {
        this.paisesarr=pais
        console.log(pais)
        this.termino=""
      },
      error:err => {
        this.error=true;
        console.log(err);
        this.paisesarr=[]},
      complete() {
        console.log("completeee!..")
      },
    })
  }
}
