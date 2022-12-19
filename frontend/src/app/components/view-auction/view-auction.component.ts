import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-view-auction',
  templateUrl: './view-auction.component.html',
  styleUrls: ['./view-auction.component.css']
})
export class ViewAuctionComponent implements OnInit {

  constructor(private api:ApiService) { }
productList:any;
veh_name:'';
p:any;
  ngOnInit(): void {
    this.getContactData();

   
  }
  getContactData(){
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      console.log(this.productList)
      
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price, });
        });
        //console.log(this.productList)
      });
    }

 
  Search(){
    if(this.veh_name !=""){
      this.productList = this.productList.filter(res=>{
        return res.veh_name.toLocaleLowerCase().match(this.veh_name.toLocaleLowerCase());
       });
     }
     else if(this.veh_name ==""){
       this.ngOnInit();
     }
  }
}
