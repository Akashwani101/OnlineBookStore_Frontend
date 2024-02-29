import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Product } from '../Product';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.css'
})
export class AdminProductComponent {

  // cerate the constructor of service here to access service
  constructor(private httpService: HttpServiceService){} // this is dependency injection 
      posts:any;
      model:any;
      //model2:any;

      ngOnInit(){ // called by default as our web page loaded in browser
        this.httpService.getProduct().subscribe(
          (response)=>{this.posts=response; 
          //console.log(this.posts)
        },
          (error)=>{console.log(error)}
        );
      }

      update(id:number,name:string,description:string,publication:string,stk:number,price:number,link:string){
        this.model=new Product(id,name,description,publication,stk,price,link);
        this.httpService.update(this.model).subscribe(
          (response)=>{this.posts=response;
          console.log(this.posts);
        });
        window.location.reload();
      }

      delete(id:number){
        this.httpService.delete(id).subscribe(
          (response)=>{this.posts=response;}
          );
       window.location.reload();
      }

      model2=new Product(1,"Book Name","Good Book To Read","XYZ publication",800,1000,"https://media.istockphoto.com/id/1453081662/photo/bookstore-in-the-city-center-of-lisbon.jpg?s=2048x2048&w=is&k=20&c=y-1oauy6OC5WKHqhr_2CfHTGk67hP0QMxGauv73DXT8=");
      create(){
        this.httpService.create(this.model2).subscribe(
          (response)=>(console.log(response))
          );
         window.location.reload();
        
      }

}  
  
    
