import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import{Router} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  ptype = ['Vegetable', 
  'Fruit',
  'Yam',
  'Cereal'];
  pmethode=['Organic','Inorganic'];
  files: any;
  SelectedValue:any;
  ChangeDepartment(e:any){
    console.log(e.target.value)
    this.SelectedValue=e.target.value;
  }
  public form={
    
    veh_name:'',
    veh_img:'',
    variety:'',
    availablequantity:'',
    producttype:'',
    producedmethode:'',
    date:'',
    shelflife:'',
    price:''

    
    
    }
    
   
  constructor(private backend:BackendService,private router:Router) { }

  ngOnInit(): void {
  }

  UploadImg(event){
    this.files = event.target.files[0];
    console.log(this.files);
  }
  submitSignup(){
    
    const user = JSON.parse(localStorage.getItem('user'));
      const formdata = new FormData();
      formdata.append("veh_img",this.files,this.files.name);
      formdata.append("veh_name",this.form.veh_name);
      formdata.append("variety",this.form.variety);
      formdata.append("availablequantity",this.form.availablequantity);
      formdata.append("producttype",this.form.producttype);
      formdata.append("producedmethode",this.form.producedmethode);
      formdata.append("date",this.form.date);
      formdata.append("shelflife",this.form.shelflife);
      formdata.append("price",this.form.price);
      formdata.append("farmer_id",user.id);

      Swal.fire('Success', 'Your Message Successfully Send', 'success');
      this.router.navigateByUrl('/producttable');
      this.backend.upload(formdata).subscribe(res=>{
       
      })
      
        
        
      
    
    
    }
    
  

}
