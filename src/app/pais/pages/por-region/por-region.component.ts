import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
  regionactiv:string=""
  region:string[]=['Asia','america','oceania','europa'];


  activarReg(region:string){
     this.regionactiv=region;
  }


}
