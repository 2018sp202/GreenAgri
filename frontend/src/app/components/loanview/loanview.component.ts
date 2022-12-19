import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './../../services/subscribe.service';
import{Router} from '@angular/router';
import{AuthService} from '../../services/auth.service';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-loanview',
  templateUrl: './loanview.component.html',
  styleUrls: ['./loanview.component.css']
})
export class LoanviewComponent implements OnInit {

  subscribekArray:any;
p:any;
email:'';
constructor(private subscribeservice : SubscribeService,private Auth:AuthService, private router:Router, private token:TokenService) { }

ngOnInit(): void {
  this.getSubscribeData();
}

getSubscribeData(){
  this.subscribeservice.getAllLoan().subscribe(res=>{
  //console.log(res);

  const user = JSON.parse(localStorage.getItem('user'));
  this.subscribekArray = res;
  this.subscribekArray = this.subscribekArray.filter(pd=>{
    return pd.officer_id == user.id
  })
  });
}

deleteData(id){
 this.subscribeservice.deleteLoan(id).subscribe(res=>{
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
  return this.subscribeservice.success(id).subscribe(
    
    
);

}
fail(id:any) {
  return this.subscribeservice.fail(id).subscribe(res=>{
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
