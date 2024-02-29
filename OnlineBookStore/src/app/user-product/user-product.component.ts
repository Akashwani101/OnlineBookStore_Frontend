import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from '../http-service.service';
import { Product } from '../Product';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { customer } from '../Customer';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrl: './user-product.component.css'
})

export class UserProductComponent {

  posts:any;
  constructor(private userService: UserServiceService,private router: Router){}
  cart1:Cart[]=new Array();
  count=new Array();
  ngOnInit(){ // called by default as our web page loaded in browser
    this.userService.getProduct().subscribe(
      (response)=>{this.posts=response; 
      //console.log(this.posts)
    },
      (error)=>{console.log(error)}
    );
  }
  qty:number=1;
  total:number=0;
  totalsum:number=0;
  
  addToCart(prodid:number,name:string,price:number){
    this.totalsum=0;
    this.cart1.push(new Cart(name,price,prodid,this.qty,price*this.qty));
    for(let i of this.cart1){
      //console.log(this.total);
      this.totalsum +=i.total;
    }
    this.count.push(this.cart1.length);
    console.log(this.count);
  }
  

  
  cust = new customer("",91,"",this.cart1);
  m:any;
 // cphone:number=91000100001;
  Placeholder(phone:number){
    this.userService.cust1 = this.cust;
    console.log(this.cust);
    this.userService.PlaceOrder(this.cust).subscribe(
      (response:string)=>{this.m=response;
        if(this.m.indexOf('Your Order has been placed successfullly')!=-1)
          {
            console.log(this.m);
          }
        else{
         
          console.log(this.cust.phone);
            this.router.navigate(['/successful']);

          }
          //this.router.navigate(['/successful']);}
         // document.write(this.m);
         //, { data : this.userService.cust1  }
        },
        (error)=>{console.log(error)},
     );    
  }

}
