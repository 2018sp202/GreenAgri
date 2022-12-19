import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './../../services/subscribe.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

 
  subscribekArray:any;
  p:any;
  location:'';
  producttype:'';
  constructor(private subscribeservice : SubscribeService, private router:Router) { }
  
  ngOnInit(): void {
    this.getSubscribeData();
  }
  
  getSubscribeData(){
    this.subscribeservice.getAllFarm().subscribe(res=>{
    //console.log(res);
    const user = JSON.parse(localStorage.getItem('user'));
    this.subscribekArray = res;
    this.subscribekArray = this.subscribekArray.filter(pd=>{
      return pd.farmer_id == user.id
    })
    console.log(this.subscribekArray);
    
  
    });
  }
  success() {
  
    this.router.navigateByUrl('/farm');
  }
  deleteData(id){
   this.subscribeservice.deleteFarm(id).subscribe(res=>{
   this.getSubscribeData();
   });
  }
  
  Search(){
    if(this.location !=""){
      this.subscribekArray = this.subscribekArray.filter(res=>{
        return res.location.toLocaleLowerCase().match(this.location.toLocaleLowerCase());
       });
     }
     else if(this.location ==""){
       this.ngOnInit();
     }
  }
}
