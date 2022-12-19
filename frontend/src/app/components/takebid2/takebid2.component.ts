import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { BackendService } from 'src/app/services/backend.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-takebid2',
  templateUrl: './takebid2.component.html',
  styleUrls: ['./takebid2.component.css']
})
export class Takebid2Component implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  id:any;
   p:12;
  vid: any;

public form={
  auction_id:'',
  buyer_id:this.user.id,
  price:''
  
  
  
  }
 
    days:any;
  hours:number;
  mins:number;
  secs:number;
  public datex:any;
  x:any
    public filterCategory : any;
    public productList : any ;
    plist:any;
  
    constructor(private request:RequestService,private fb:FormBuilder,private route: ActivatedRoute,private backend:BackendService,private router:Router,private api : ApiService) { }

    pp(Y){
      clearInterval(this.x)
      this.x=setInterval(()=>{
      
        // var dataxx=JSON.parse(JSON.stringify(this.datex))
        // var dataxxxx=Object.values(dataxx);
        // console.log(dataxxxx.length);
        // for(let i = 0; i<dataxxxx.length; i++){
        //   this.enddates.push(dataxxxx[0])
        // }
        // console.log(this.enddates);
  
        var futureDate = new Date(Y).getTime();
          var today = new Date().getTime();
          
          var distance = futureDate - today;
          this.days = Math.floor(distance/(1000 * 60 * 60 *24));
          this.hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
          this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.secs = Math.floor((distance % (1000 * 60)) / (1000));
          if(distance < 1){
            clearInterval(this.x);
            this.days = "offer expired";
            this.hours = -1;
          }
    
      
      }, 1000)
     
    }
    


  ngOnInit(): void {
   this.vid=this.route.snapshot.queryParams['id'];
   
   this.api.getProduct()
    .subscribe(res=>{
      //this.productList = res;
      this.filterCategory = res;
      //const product = JSON.parse(localStorage.getItem('product'));
      this.productList = this.filterCategory.filter(f => f.id ==this.vid);
     console.log(this.filterCategory);
    
      });
     
      
  
  }
 
  
  submitSignup(){
    
    this.vid=this.route.snapshot.queryParams['id'];
    const formdata = new FormData();
      formdata.append("auction_id",this.vid);
      formdata.append("buyer_id",this.user.id);
     formdata.append("price",this.form.price);
    console.log(formdata);
    Swal.fire('Success', 'Your Message Successfully Send', 'success');
    this.router.navigateByUrl('/buyerdashboard');
    return this.backend.bid(formdata).subscribe(
      data=>console.log(data)
      
     
      
        
        
      
    );
    
    }
  
    //getProductData(id){
      //this.api.getp(id).subscribe(res=>{
     // console.log(res);
     // this.productList  = res;
    
      //});
    //}
}

