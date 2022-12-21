import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor( private http:HttpClient) { }

  api="http://localhost:8080";
  // AjouterRegion(nomRegion : string,codeRegion:string,superficie:string, :string,description:string,pays:string,langue:string,activite:string):Observable<Object>{
  //   let data = new FormData();
  //   data.append("nomRegion", nomRegion);
  //   data.append("codeRegion", codeRegion);
  //   data.append("superficie", superficie);
  //   data.append("imageregion", imageregion);
  //   data.append("description", description);
   

  //   return this.http.post(`${this.api}/region/create/${pays}/${activite}/${langue}`, data)
  // }

  getAllRegion():Observable<any>{
    return this.http.get(`${this.api}/region/read`)
  }


  //::::::::::::::::::::::::::::::::Ajouter region::::::::::::::::::::::::::::::::::::::://


 
  ajoutRegion( 
    codeRegion :any,
    nomRegion: any,
    superficie:any,
    image :any,
    langue: any,
    pays:any,
    activite: any,
    description:any): Observable<any> {

    let data = new FormData();
   
    data.append("nomRegion", nomRegion);
    data.append("codeRegion", codeRegion);
    data.append("superficie", superficie);
    data.append("imageregion", image);
    data.append("description", description);
   

    
    // data.append('region', JSON.stringify(region).slice(1, JSON.stringify(region).lastIndexOf(']')));

    return this.http.post(`http://localhost:8080/region/create/${pays}/${activite}/${langue}`, data);
  }

}
