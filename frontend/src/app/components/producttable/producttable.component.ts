import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './../../services/subscribe.service';
import{Router} from '@angular/router';
import{AuthService} from '../../services/auth.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {

  subscribekArray:any;
  editArray:any;
p:any;
email:'';
producttype:'';
veh_name:'';
constructor(private subscribeservice : SubscribeService,private Auth:AuthService, private router:Router, private token:TokenService) { }

ngOnInit(): void {
  this.getSubscribeData();
}

getSubscribeData(){
  this.subscribeservice.getAllProduct().subscribe(res=>{
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
  if(this.veh_name !=""){
    this.subscribekArray = this.subscribekArray.filter(res=>{
      return res.veh_name.toLocaleLowerCase().match(this.veh_name.toLocaleLowerCase());
     });
   }
   else if(this.producttype ==""){
     this.ngOnInit();
   }
}
success() {
  
  this.router.navigateByUrl('/product');
}

logout(event:MouseEvent){
  event.preventDefault();
  this.token.remove();
  this.Auth.changeAuthStatus(false);
  this.router.navigateByUrl('/home');
}
goEdit(data) {
   
  this.editArray = this.subscribekArray.filter(f => f.id == data);
  
  this.router.navigate(['/auction'], {queryParams: {  id: data}});

  this.subscribeservice.setEditChairArray(this.editArray);
console.log(this.editArray);
  
}

}

