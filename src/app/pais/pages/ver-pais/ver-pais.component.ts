import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { expand } from 'rxjs';
import { Countries } from '../../interfaces/pais';
import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit   {
  
  pais!:Countries[];
  
  constructor (private activatedRoute: ActivatedRoute, private paisService: PaisServiceService){}; 
  
  ngOnInit(): void {
     this.activatedRoute.params.subscribe(({id})=>{
      console.log(id);
      this.paisService.verPais(id).subscribe(pais =>
         {console.log("tambien",pais)
          this.pais=pais})
     })


     
  }
  
  
  

}
