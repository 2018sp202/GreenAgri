import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { SubscribeService } from 'src/app/services/subscribe.service';
import { ApiService } from 'src/app/services/api.service';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private backend:BackendService, private subscribeservice:SubscribeService, private api:ApiService, private contactService:ContactService) { }
  subscribekArray:any;
  subscribekArray1:any;
  total: number = 0;
  subscribekArray3:any;
  totala: number = 0;
  subscribekArray4:any;
  total5: number = 0;
  total1: number = 0;
  productList:any;
  total4: number = 0;
  contactArray:any;
  totalc: number = 0;
  ngOnInit(): void {
    this.getfarmerData()
    this.getaoData()
    this.getSubscribeData()
    this.getauction()
   this.getContactData()
    
  }
  getfarmerData(){
    this.backend.getAllFarmers().subscribe (res=>{
    console.log(res);
    this.subscribekArray = res;
  this.total=this.subscribekArray.length;
    });
  }
  getaoData(){
    this.backend.getAllAo().subscribe(res=>{
    console.log(res);
    this.subscribekArray1 = res;
    this.total1=this.subscribekArray1.length;
    });
  }

  getSubscribeData(){
    this.subscribeservice.getAllLoan().subscribe(res=>{
    //console.log(res);
  
    const user = JSON.parse(localStorage.getItem('user'));
    this.subscribekArray3 = res;
    this.totala=this.subscribekArray3.length;
    });
  }
 
  getauction(){
    this.api.getProduct()
  .subscribe(res=>{
    this.productList = res;
    console.log(this.productList)
    this.total4=this.productList.length;
    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price, });
      });
      //console.log(this.productList)
    });
  }
  getContactData(){
    this.contactService.getAllContacts().subscribe(res=>{
    //console.log(res);
    this.contactArray = res;
    this.totalc=this.contactArray.length;
    });
  }
}
