import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './../../services/subscribe.service';
@Component({
  selector: 'app-loanviewx',
  templateUrl: './loanviewx.component.html',
  styleUrls: ['./loanviewx.component.css']
})
export class LoanviewxComponent implements OnInit {

  subscribekArray:any;
p:any;
email:'';
constructor(private subscribeservice : SubscribeService) { }

ngOnInit(): void {
  this.getSubscribeData();
}

getSubscribeData(){
  this.subscribeservice.getAllLoan().subscribe(res=>{
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
  return this.subscribeservice.success(id).subscribe(res=>{
    console.log(res);
});

}
fail(id:any) {
  return this.subscribeservice.fail(id).subscribe(res=>{
    console.log(res);
});

}


}

