import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './../../services/subscribe.service';
import{Router} from '@angular/router';
import{AuthService} from '../../services/auth.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-requesttable',
  templateUrl: './requesttable.component.html',
  styleUrls: ['./requesttable.component.css']
})
export class RequesttableComponent implements OnInit {

  subscribekArray:any;
p:any;
email:'';
status:'';
constructor(private subscribeservice : SubscribeService,private Auth:AuthService, private router:Router, private token:TokenService) { }

ngOnInit(): void {
  this.getSubscribeData();
}

getSubscribeData(){
  this.subscribeservice.getAllRequest().subscribe(res=>{
  //console.log(res);
  this.subscribekArray = res;

  });
}

deleteData(id){
 this.subscribeservice.deleterequest(id).subscribe(res=>{
 this.getSubscribeData();
 });
}

Search(){
  if(this.status !=""){
    this.subscribekArray = this.subscribekArray.filter(res=>{
      return res.status.toLocaleLowerCase().match(this.status.toLocaleLowerCase());
     });
   }
   else if(this.status ==""){
     this.ngOnInit();
   }
}
success() {
  
  this.router.navigateByUrl('/doubt');
}

logout(event:MouseEvent){
  event.preventDefault();
  this.token.remove();
  this.Auth.changeAuthStatus(false);
  this.router.navigateByUrl('/home');
}


}

