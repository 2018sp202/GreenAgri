import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  p:any;
  bookingArray :any;
  id:any;
  message = '';
  constructor(private http: HttpClient,private request:RequestService,private router:Router,private backend:BackendService) { }

  ngOnInit(): void {
    this.getBookData();
    
  }
  getBookData(){
    this.request.getAllBooking().subscribe(res=>{
    //console.log(res);
    this.bookingArray = res;
    });
  }
  success(id:any) {
    return this.request.success(id)
  };
 

  fail(){
    this.request.fail().subscribe(res=>{
      console.log(res);
      
      });

  }

}
