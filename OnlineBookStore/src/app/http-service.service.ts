import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';
import { customer } from './Customer';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  
  getProduct() // calling API
  {
    const url="http://localhost:8080/api/book/show";
    return this.http.get(url);
  }

  update(p:Product){
    console.log(p);
    const url="http://localhost:8080/api/book/update/"+p.Id;
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(url,p,{headers});
  }

  delete(id:number){
    const url="http://localhost:8080/api/book/delete/"+id;
    return this.http.delete(url);
  }

  create(model:Product){
    const url="http://localhost:8080/api/book/add";
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url,model,{headers});     //,'responseType':'application/json'});
 
  }
}
