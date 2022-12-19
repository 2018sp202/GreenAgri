import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import{Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-aofficersignup',
  templateUrl: './aofficersignup.component.html',
  styleUrls: ['./aofficersignup.component.css']
})
export class AofficersignupComponent implements OnInit {
  genders = ['male', 'female'];
  public form={
    name:null,
    email:'',
    password:null,
    role:'agriculturalOfficer',
    address:null,
    gender: '',
    mobilenumber:null,
    officedetails:null
    }
  constructor(private backend:BackendService ,private router:Router) { }
public error:any=[];

  ngOnInit(): void {
  }
  submitSignup(){
    console.log(this.form);
    //alert('Form submitted successfully');
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
