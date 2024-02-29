import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';
import { customer } from './Customer';
import { login } from './Login';
import { Cart } from './Cart';
@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  cart1:Cart[]=new Array();
  cust1 = new customer("",91,"",this.cart1);
 
  constructor(private http:HttpClient) { }
  
  getProduct() // calling API
  {
    const url="http://localhost:8080/api/book/show";
    return this.http.get(url);
  }

  PlaceOrder(cust:customer){
    const url="http://localhost:8080/api/book/orderproduct";
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.post(url,cust,{headers,'responseType':'text'});
  }

  userlogin(model:login){
    const url="http://localhost:8080/api/userlogin/search/"+model.email+"/"+model.password;
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.get(url,{headers,'responseType':'text'});
  }

 usersignup(model:login){
  const url="http://localhost:8080/api/userlogin/signup";
    var headers=new HttpHeaders({'Content-Type':'application/json',responseType:'text'});
    return this.http.post(url,model,{headers,'responseType':'text'});
  
 }

 displayorder(model:customer){
  const url="http://localhost:8080//findbyOrder/"+model.phone;
  return this.http.get(url);

 }

 


}