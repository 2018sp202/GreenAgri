import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service'
import{Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form={
    name:null,
    email:null,
    password:null,
    role:'farmer',
    address:null,
    mobilenumber:null
    }
  constructor(private backend:BackendService,private router:Router) { }
public error:any=[];

  ngOnInit(): void {
  }
  submitSignup(){
    console.log(this.form);
    //alert( 'You registered succesfully!');
    Swal.fire('Success', 'Registered successfully!', 'success');

    return this.backend.signup(this.form).subscribe(
      data=>console.log(data),
      error=>this.handleError(error),
     
      () => {
        
        this.router.navigate(['login']);
      }
    );
    
    }
    handleError(error:any){
      this.error=error.error.errors;

    }

}