import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { BackendService } from 'src/app/services/backend.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  public form={
    auction_id:null,
    buyer_id:null,
    price:null
    
    
    
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
    id:any;
    vid: any;
    constructor(private request:RequestService,private route: ActivatedRoute,private backend:BackendService,private router:Router,private api : ApiService) { }

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
   // this.vid=this.route.snapshot.queryParams['id'];
    //this.id=this.route.snapshot.params['id'];
   // this.backend.getVehicle(2)
   this.api.getProduct()
    .subscribe(res=>{
      //this.productList = res;
      this.filterCategory = res;
      //const product = JSON.parse(localStorage.getItem('product'));
      this.productList = this.filterCategory.filter(f => f.id ==2);
     // console.log(JSON.stringify(this.productList));
         
     // this.productList.forEach((a:any) => {
       // Object.assign(a,{quantity:1,total:a.price, });
       // });
        //
      });
  
      
  
  }
  submitSignup(){
    console.log(this.form);
    Swal.fire('Success', 'Your Message Successfully Send', 'success');
    this.router.navigateByUrl('/buyerdashboard');
    return this.backend.bid(this.form).subscribe(
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
