import { Component, Input } from '@angular/core';
import { Countries } from '../../interfaces/pais'; 


@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  
  styles: [
  ]
})

export class TablaPaisComponent {
  @Input() paisesarr:Countries[] = [];

  constructor(){}
}
