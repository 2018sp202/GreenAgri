import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
@Component({
  selector: 'app-view-farmer',
  templateUrl: './view-farmer.component.html',
  styleUrls: ['./view-farmer.component.css']
})
export class ViewFarmerComponent implements OnInit {

  subscribekArray:any;
  p:any;
  id:any;
  message = '';
  email:'';
  constructor(private backend : BackendService) { }

  ngOnInit(): void {
    this.getfarmerData();
  }

  getfarmerData(){
    this.backend.getAllFarmers().subscribe (res=>{
    console.log(res);
    this.subscribekArray = res;
  
    });
  }

  deleteData(id){
   this.backend.deleteData(id).subscribe(res=>{
   this.getfarmerData();
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
}
