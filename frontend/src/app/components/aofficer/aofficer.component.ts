import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { SubscribeService } from 'src/app/services/subscribe.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-aofficer',
  templateUrl: './aofficer.component.html',
  styleUrls: ['./aofficer.component.css']
})
export class AofficerComponent implements OnInit {

  constructor(private Auth:AuthService, private router:Router, private token:TokenService,private subscribeservice : SubscribeService ) { }
  subscribekArray:any;
  total:number =0;
  subscribekArrayx:any;
  totalx:number =0;
  subscribekArrayxx:any;
  totalxx:number =0;
  ngOnInit(): void {
    this.getSubscribeData()
    this.getSubscribeDatax()
    this.getSubscribeDataxx()

  }
  logout(event:MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/home');
  }
  getSubscribeData(){
    this.subscribeservice.getAllRelief().subscribe(res=>{
    //console.log(res);
    
    const user = JSON.parse(localStorage.getItem('user'));
    const relief = JSON.parse(localStorage.getItem('relief'));
    this.subscribekArray = res;
    this.subscribekArray = this.subscribekArray.filter(pd=>{
      return pd.officer_id == user.id
    })
    this.total=this.subscribekArray.length;
    });
  }
  getSubscribeDatax(){
    this.subscribeservice.getAllLoan().subscribe(res=>{
    //console.log(res);
  
    const user = JSON.parse(localStorage.getItem('user'));
    this.subscribekArrayx = res;
    this.subscribekArrayx = this.subscribekArrayx.filter(pd=>{
      return pd.officer_id == user.id
    })
    this.totalx=this.subscribekArrayx.length;
    });
  }
  getSubscribeDataxx(){
    this.subscribeservice.getAllRequest().subscribe(res=>{
    //console.log(res);
    const user = JSON.parse(localStorage.getItem('user'));
  this.subscribekArrayxx = res;
  this.subscribekArrayxx = this.subscribekArrayxx.filter(pd=>{
    return pd.officer_id == user.id
  })
  this.totalxx=this.subscribekArrayxx.length;
    });
  }
  
}
