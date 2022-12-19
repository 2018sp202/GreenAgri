import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { BackendService } from 'src/app/services/backend.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  subscribekArray:any;
   user = JSON.parse(localStorage.getItem('user'));
  SelectedValue:any;
  ChangeDepartment(e:any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value;
  }
  
  public form={
    farmer_id:this.user.id,
    reason:null,
    amount:null,
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
    this.router.navigateByUrl('/loantable');
    return this.backend.loan(this.form).subscribe(
      data=>console.log(data)
      
     
      
        
        
      
    );
    
    }
    
    getfarmerData(){
      this.backend.getAllAo().subscribe(res=>{
      console.log(res);
      this.subscribekArray = res;
    
      });
    }
  
}
