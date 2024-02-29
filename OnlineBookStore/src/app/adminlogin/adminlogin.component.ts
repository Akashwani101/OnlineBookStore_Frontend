import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  constructor(private userService: UserServiceService,private router: Router){}


  home(){
    this.router.navigate(['./home']);
  }

  adminlogin(inputvalue:string){
    console.log(inputvalue);
    this.router.navigate(['./admin-product']);
  }
  
}
