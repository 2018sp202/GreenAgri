import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  form:FormGroup
  files:any;
  VehiclesService: any;
  dataArr: any;
  filedata: any;
  selectedFile: File = null;
  constructor(private http: HttpClient,private fb:FormBuilder,private backend:BackendService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
    
    veh_img:['',Validators.required]
    
  });
}


fileEvent(e){
  this.filedata = e.target.files[0];
}
// getVehicleData(){
//   this.VehiclesService.getAllVehicles().subscribe(res=>{
//     this.dataArr=res;
//   })
// }
// insertData()
// {
//   let formdata = new FormData();
//   formdata.append("file",this.files,this.files.name);
//   this.VehiclesService.insertData(formdata).subscribe(res=>{
//     this.getVehicleData();
//   })
// }

onFileSelected(event)
{
  this.selectedFile = <File>event.target.files[0];
  console.log(event);
  
}

onUpload(){
const fd = new FormData();
fd.append('image',this.selectedFile,this.selectedFile.name);
this.http.post<any>('http://localhost:8000/api/upload',fd).subscribe(res=>
  {
    console.log(res)
  }
)
}

onSubmit(form){
  if(this.form.valid){
    this.backend.upload(form).subscribe(res=>{
      if (res)
      {
        this.router.navigate(['/'])
      }
    })
  }
}

onSubmitform(f: NgForm) {
     
  var myFormData = new FormData();
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');
  myFormData.append('image', this.filedata);
  /* Image Post Request */
  this.http.post('http://localhost:8000/api/uploadx', myFormData, {
  headers: headers
  }).subscribe(data => {
   //Check success message
   //sweetalert message popup
    Swal.fire({
         title: 'success',
         text:   data['message'],
         icon: 'success'
     });
  });  

}

}