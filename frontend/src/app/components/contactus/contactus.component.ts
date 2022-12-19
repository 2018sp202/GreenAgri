import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../services/alertify.service';
import {  FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contectForm:FormGroup;
  subscribeForm:FormGroup;
  base_url="http://localhost:8000/api";
 
  constructor(private alertify:AlertifyService, private fb:FormBuilder,private http:HttpClient) {
    this.contectForm=fb.group({
      name:'',
      email:'',
      phone_num:'',
      message:'',
      Posting_date:''

    });
    this.subscribeForm=fb.group({
      email:'',

    });
   }
   ngOnInit(): void {
  }

  save_contact(contectForm)
  {
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
    let options={
      headers:headers,
    };
    this.http.post(this.base_url+'/contactQuarry',contectForm.value,options).subscribe((data)=>{
     let respl=Array.from(Object.keys(data),k=>data[k]);
    if(respl[0]=='true')
       {
        Swal.fire('Success', 'Your Message Successfully Send', 'success');
        
        
        this.contectForm.reset();
       }
      else
        {
          Swal.fire('Cancelled', 'Your Message not Send', 'error');
          
         this.contectForm.reset();
        }
      });
    console.log(contectForm.value);
  }

  //subscribe
  subscribe_now(subscribeForm){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options={
      headers:headers,
  };
    //console.log(subscribeForm.value);
    this.http.post(this.base_url+'/subscribe',subscribeForm.value,options).subscribe((data)=>{
      let respl=Array.from(Object.keys(data),k=>data[k]);
      if(respl[0]=='true')
      {
        Swal.fire('Success', 'Thank You for Subscribe', 'success');
        
       this.subscribeForm.reset();
      }
      else
      {
        this.subscribeForm.reset();
        Swal.fire('Cancelled', 'Please Try Again or E-mail exist', 'error');
        
      }
      
      console.log(data);
   })
  }
}
