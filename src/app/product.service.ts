import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44368/api/products"
  constructor( private http: HttpClient) 
  
  
  { }

  public getAllProducts():Observable<any>

  {

    return this.http.get(this.apiUrl);
  }

  public archive(idsList:any):Observable<any>

  {
    let myData = {
     
      archives :idsList
    };
    

    return this.http.post("https://localhost:44368/api/products/archive",myData);
  }
}
