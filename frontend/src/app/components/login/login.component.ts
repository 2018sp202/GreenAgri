import { Component, OnInit } from '@angular/core';

import {BackendService} from '../../services/backend.service';
import {TokenService} from '../../services/token.service';
import{Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public form={
email:null,
password:null,
role:null
}
  constructor(private backend:BackendService,private token:TokenService,private router:Router ,private auth:AuthService) { }

  ngOnInit(): void {
  }
  public error=null;
submitLogin(){
console.log(this.form);
 
return this.backend.login(this.form).subscribe(
  data=>this.handleResponse(data),

  error=>this.handleError(error)
  
  
);
}
handleResponse(data:any){
  console.log(data.access_token);
  const role = data.user.role;
  Swal.fire('Success', 'LoggedIn successfully!', 'success');

  this.token.handle(data.access_token);
  this.auth.changeAuthStatus(true);
  console.log(data.user.role);
  
  localStorage.setItem("user", JSON.stringify(data.user))
  if(role=='farmer'){
    this.router.navigateByUrl('/producttable');
  }
  else if(role=='buyer'){
    this.router.navigateByUrl('/buyerdashboard');
  }
  else if(role=='agriculturalOfficer'){
    this.router.navigateByUrl('/Aofficer');
  }
  else if(role=='admin'){
    this.router.navigateByUrl('/admin');
  }
}
handleError(error:any){
  this.error=error.error.error;

}
}
