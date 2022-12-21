import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangueService {

  constructor(private http:HttpClient) {   }
    getAllLangue():Observable<any>{
      return this.http.get(`http://localhost:8080/langue/lister`);
  
  }
}
