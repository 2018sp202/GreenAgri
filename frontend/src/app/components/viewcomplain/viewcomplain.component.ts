import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './../../services/subscribe.service';
@Component({
  selector: 'app-viewcomplain',
  templateUrl: './viewcomplain.component.html',
  styleUrls: ['./viewcomplain.component.css']
})
export class ViewcomplainComponent implements OnInit {
subscribekArray:any;
p:any;
email:'';
constructor(private subscribeservice : SubscribeService) { }

ngOnInit(): void {
  this.getSubscribeData();
}

getSubscribeData(){
  this.subscribeservice.getAllComplain().subscribe(res=>{
  //console.log(res);
  this.subscribekArray = res;

  });
}

deleteData(id){
 this.subscribeservice.deleteComplain(id).subscribe(res=>{
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
  return this.subscribeservice.successcom(id).subscribe(res=>{
    console.log(res);
});

}
}






  