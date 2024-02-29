import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { login } from '../Login';
import { UserServiceService } from '../user-service.service';
import { signup } from '../Signup';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  posts:any;
  constructor(private userService: UserServiceService,private router: Router){}
  model = new signup('','',91,'','');
  usersignup(){
    this.userService.usersignup(this.model).subscribe(
      (response:string)=>{
        this.posts=response;
        alert(this.posts);
      },
        error=>console.log(error)
    )
      
  }
  userlogin(){
    this.router.navigate(['/home']);
  }

}
