import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http: HttpClient) { }

  getAllActivite():Observable<any>{
    return this.http.get(`http://localhost:8080/activite/lister`);
  }
}
