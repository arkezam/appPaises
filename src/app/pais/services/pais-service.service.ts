import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from '../interfaces/pais';
@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  private apiurl:string = "https://restcountries.com/v3.1"
  constructor(private http:HttpClient) { }

  
  buscarPais(termino:string):Observable<Countries[]>{
    
    const url = `${this.apiurl}/name/${termino}`
    
    //this.http.get(url).subscribe(resp => {console.log(resp)})
    return this.http.get<Countries[]>(url)


  }
  buscarCapital(termino:string):Observable<Countries[]>{
    
    const url = `${this.apiurl}/capital/${termino}`
    
    //this.http.get(url).subscribe(resp => {console.log(resp)})
    return this.http.get<Countries[]>(url)


  }

  verPais(termino:string):Observable<Countries[]>{
    
    const url = `${this.apiurl}/alpha/${termino}`
    //https://restcountries.com/v3.1/alpha/pe
    //this.http.get(url).subscribe(resp => {console.log(resp)})
    console.log("importante",this.http.get<Countries>(url))
    return this.http.get<Countries[]>(url)



  }
}
