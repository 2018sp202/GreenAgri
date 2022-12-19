import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { BackendService } from 'src/app/services/backend.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-relieffund',
  templateUrl: './relieffund.component.html',
  styleUrls: ['./relieffund.component.css']
})
export class RelieffundComponent implements OnInit {
  SelectedValue:any;
  ChangeDepartment(e:any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value;
  }
  user = JSON.parse(localStorage.getItem('user'));
  public form={
    farmer_id:this.user.id,
    reason:null,
    amount:null,
    date:null,
    officer_id:null
    
    
    }
  
    subscribekArray:any;
  constructor(private request:RequestService,private backend:BackendService,private router:Router) { }

  ngOnInit(): void {
    this.getfarmerData();
    
  }
  submitSignup(){
    console.log(this.form);
    Swal.fire('Success', 'Your Message Successfully Send', 'success');
    this.router.navigateByUrl('/relieftable');
    return this.request.relief(this.form).subscribe(
       data=>this.handleResponse(data),
      
      
      
    );
    
    }
    handleResponse(data:any){
      localStorage.setItem("relief", JSON.stringify(data))
     
    }

    
    getfarmerData(){
      this.backend.getAllAo().subscribe(res=>{
      console.log(res);
      this.subscribekArray = res;
    
      });
    }
  
}
