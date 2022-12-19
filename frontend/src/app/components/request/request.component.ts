import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { BackendService } from 'src/app/services/backend.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  
    subscribekArray:any;
    SelectedValue:any;
  ChangeDepartment(e:any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value;
  }
  user = JSON.parse(localStorage.getItem('user'));
  public form={
    farmer_id:this.user.id,
    problem:null,
    doubt:null,
    date:null,
    officer_id:null
    
    
    }
  constructor(private request:RequestService,private backend:BackendService,private router:Router) { }

  ngOnInit(): void {
    this.getfarmerData();
  }
  submitSignup(){
    console.log(this.form);
    Swal.fire('Success', 'Your Message Successfully Send', 'success');
    this.router.navigateByUrl('/requestable');
    return this.request.doubt(this.form).subscribe(
      data=>console.log(data),
      
    );
    
    
    }
    
    getfarmerData(){
      this.backend.getAllAo().subscribe(res=>{
      console.log(res);
      this.subscribekArray = res;
    
      });
    }
  
}
