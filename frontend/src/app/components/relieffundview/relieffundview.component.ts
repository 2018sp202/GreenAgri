import { Component, OnInit } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';
import{AuthService} from '../../services/auth.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-relieffundview',
  templateUrl: './relieffundview.component.html',
  styleUrls: ['./relieffundview.component.css']
})
export class RelieffundviewComponent implements OnInit {
  subscribekArray:any;
  p:any;
  email:'';
  constructor(private subscribeservice : SubscribeService,private Auth:AuthService, private router:Router, private token:TokenService) { }
  
  ngOnInit(): void {
    this.getSubscribeData();
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
    });
  }
  
  deleteData(id){
   this.subscribeservice.deleterelief(id).subscribe(res=>{
   this.getSubscribeData();
   });
  }
  
  Search(){
    if(this.email !=""){
      this.subscribekArray = this.subscribekArray.filter(res=>{
        return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
       });
     }
     else if(this.email ==""){
       this.ngOnInit();
     }
  }
  
  success(id:any) {
    return this.subscribeservice.successr(id).subscribe(
      
      
  );
  
  }
  fail(id:any) {
    return this.subscribeservice.failr(id).subscribe(res=>{
      console.log(res);
  });
  
  }
  logout(event:MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/home');
  }
  }
  