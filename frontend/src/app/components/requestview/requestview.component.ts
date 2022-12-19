import { Component, OnInit } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';
import{AuthService} from '../../services/auth.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-requestview',
  templateUrl: './requestview.component.html',
  styleUrls: ['./requestview.component.css']
})
export class RequestviewComponent implements OnInit {

 

  subscribekArray:any;
  p:any;
  email:'';
  constructor(private subscribeservice : SubscribeService,private Auth:AuthService, private router:Router, private token:TokenService) { }
  
  ngOnInit(): void {
    this.getSubscribeData();
  }
  
  getSubscribeData(){
    this.subscribeservice.getAllRequest().subscribe(res=>{
    //console.log(res);
    const user = JSON.parse(localStorage.getItem('user'));
  this.subscribekArray = res;
  this.subscribekArray = this.subscribekArray.filter(pd=>{
    return pd.officer_id == user.id
  })
  
    });
  }
  
  deleteData(id){
   this.subscribeservice.deleterequest(id).subscribe(res=>{
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
    return this.subscribeservice.successd(id).subscribe(
      
      
  );
  
  }
  fail(id:any) {
    return this.subscribeservice.faild(id).subscribe(res=>{
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
  
