import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-expireda',
  templateUrl: './expireda.component.html',
  styleUrls: ['./expireda.component.css']
})
export class ExpiredaComponent implements OnInit {

  constructor(private api:ApiService) { }
productList:any;
veh_name:'';
p:any;
  ngOnInit(): void {
    

    this.getContactData();
  }
  getContactData(){
    this.api.getExpiredA()
  .subscribe(res=>{
    this.productList = res;
    console.log(this.productList)
    const user = JSON.parse(localStorage.getItem('user'));

  this.productList = this.productList.filter(pd=>{
    return pd.farmer_id == user.id
  })
    
    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price, });
      });
      //console.log(this.productList)
    });
    }
    deleteData(id){
      this.api.deleteData(id).subscribe(res=>{
      this.getContactData();
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



