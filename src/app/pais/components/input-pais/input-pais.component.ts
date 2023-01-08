import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-input-pais',
  templateUrl: './input-pais.component.html',
  styles: [
  ]
})
export class InputPaisComponent implements OnInit{
  
  @Output() onpaisoutput: EventEmitter <string> = new EventEmitter()
  @Output() onDebaunce: EventEmitter <string> = new EventEmitter()
  @Input() placeholder:string = ""
  debauncer : Subject<string> = new Subject;
  
  
  termino = ''
  
  ngOnInit() {
    this.debauncer.pipe(debounceTime(300))
    .subscribe(valor=>{
      this.onDebaunce.emit(valor);
      console.log(valor)
    })
    
  }
  
  buscar(){
    
    this.onpaisoutput.emit(this.termino)
  }
  teclapresionada(){
    this.debauncer.next(this.termino)
  }

}
