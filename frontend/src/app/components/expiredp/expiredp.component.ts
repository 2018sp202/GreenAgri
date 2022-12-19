import { Component, OnInit } from '@angular/core';

import { SubscribeService } from './../../services/subscribe.service';
import{Router} from '@angular/router';
import{AuthService} from '../../services/auth.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-expiredp',
  templateUrl: './expiredp.component.html',
  styleUrls: ['./expiredp.component.css']
})
export class ExpiredpComponent implements OnInit {

 

  subscribekArray:any;
  editArray:any;
p:any;
email:'';
producttype:'';
constructor(private subscribeservice : SubscribeService,private Auth:AuthService, private router:Router, private token:TokenService) { }

ngOnInit(): void {
  this.getSubscribeData();
}

getSubscribeData(){
  this.subscribeservice.getExpiredProduct().subscribe(res=>{
  //console.log(res);
  const user = JSON.parse(localStorage.getItem('user'));
  this.subscribekArray = res;
  this.subscribekArray = this.subscribekArray.filter(pd=>{
    return pd.farmer_id == user.id
  })
  console.log(this.subscribekArray);
  

  });
}

deleteData(id){
 this.subscribeservice.deleteProduct(id).subscribe(res=>{
 this.getSubscribeData();
 });
}

Search(){
  if(this.producttype !=""){
    this.subscribekArray = this.subscribekArray.filter(res=>{
      return res.producttype.toLocaleLowerCase().match(this.producttype.toLocaleLowerCase());
     });
   }
   else if(this.producttype ==""){
     this.ngOnInit();
   }
}



}


