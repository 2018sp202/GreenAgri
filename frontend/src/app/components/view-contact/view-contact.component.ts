import { Component, OnInit } from '@angular/core';
import { ContactService } from './../../services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contactArray:any;
  p:any;
  email:'';
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.getContactData();
  }

  getContactData(){
    this.contactService.getAllContacts().subscribe(res=>{
    //console.log(res);
    this.contactArray = res;
    });
  }

  deleteData(id){
    this.contactService.deleteData(id).subscribe(res=>{
    this.getContactData();
    });
   }

   Search(){
    if(this.email !=""){
      this.contactArray = this.contactArray.filter(res=>{
        return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
       });
     }
     else if(this.email ==""){
       this.ngOnInit();
     }
  }
  

}
