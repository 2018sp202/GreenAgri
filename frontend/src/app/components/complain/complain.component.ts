import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import{Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  public form={
    FarmerID:this.user.id,
    ComplainType:'',
    Complain:''

  }
  constructor(private request:RequestService,private router:Router) { }

  ngOnInit(): void {
  }
  submitSignup(){
    console.log(this.form);
    //alert( 'You registered succesfully!');
    Swal.fire('Success', 'Your Message Successfully Send', 'success');
    this.router.navigateByUrl('/complaintable');
    return this.request.complain(this.form).subscribe(
      data=>console.log(data),
      
     
      
    );
    
    }
    
}
