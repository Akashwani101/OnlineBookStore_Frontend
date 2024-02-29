import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../Cart';
import { customer } from '../Customer';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrl: './successful.component.css',
  
})
export class SuccessfulComponent  implements OnInit {
  cart1:any;
  receivedData: any;
  cust : any;
  constructor(private userService: UserServiceService,private router: Router,private route: ActivatedRoute){}

  ngOnInit() {

    //this.cust = this.route.snapshot.paramMap.get(data);
    //this.cust=this.receivedData;
    this.cust=this.userService.cust1;
    console.log(this.cust);

  }
}
