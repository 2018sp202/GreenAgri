import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { BackendService } from 'src/app/services/backend.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-addfarm',
  templateUrl: './addfarm.component.html',
  styleUrls: ['./addfarm.component.css']
})
export class AddfarmComponent implements OnInit {

  

  ngOnInit(): void {
  }
  user = JSON.parse(localStorage.getItem('user'));
  public form={
    farmer_id:this.user.id,
    location:null,
    size:null,
    owner_id:null
    
    }
   
  constructor(private request:RequestService,private backend:BackendService,private router:Router) { }

  
  submitSignup(){
    console.log(this.form);
    Swal.fire('Success', 'Your Message Successfully Send', 'success');
    this.router.navigateByUrl('/farmtable');
    return this.backend.farm(this.form).subscribe(
      data=>console.log(data)
      
     
      
        
        
      
    );
    
    }
}
