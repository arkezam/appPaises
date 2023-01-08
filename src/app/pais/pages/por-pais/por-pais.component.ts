import { Component } from '@angular/core';
import { PaisServiceService } from '../../services/pais-service.service';
import { Countries } from '../../interfaces/pais';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
      a:link { text-decoration:none; } a:visited { text-decoration:none; }
    
  `  
  ]
})
export class PorPaisComponent {
  termino:string = "";
  error:boolean=false;
  paisesarr:Countries[]=[];
  
  paisesSug:Countries[]=[];

  constructor(private paisService:PaisServiceService){}

  buscar(termino:string){
    this.error = false;
    this.termino = termino
    console.log(this.termino)
    //this.paisService.buscarPais(this.termino)
    
    this.paisService.buscarPais(this.termino)
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

  sugerencias(termino:string){
    this.error = false;
    this.paisService.buscarPais(termino).subscribe({
      next:paises =>  this.paisesSug = paises.splice(0,5),
      error:err=>this.paisesSug = []
    } )
  }

}
