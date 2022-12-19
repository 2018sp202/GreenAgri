import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';

import { BackendService } from 'src/app/services/backend.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  vid:any;
  public form={
    
    product_id:'',
    farmer_id:'',
    startdate:'',
    enddate:'',
    baseprice:'',
    
    
    
    
    }
   
    constructor(private backend:BackendService,private router:Router,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.vid=this.route.snapshot.queryParams['id'];
  }
  submitSignup(){
    this.vid=this.route.snapshot.queryParams['id'];
    const formdata = new FormData();
    formdata.append("product_id",this.vid);
      formdata.append("farmer_id",this.user.id);
      
      formdata.append("startdate",this.form.startdate);
      formdata.append("enddate",this.form.enddate);
      
     formdata.append("baseprice",this.form.baseprice);
     
    console.log(formdata);
    Swal.fire('Success', 'Your Auction Successfully Send', 'success');
    this.router.navigateByUrl('/producttable');
    return this.backend.auction(formdata).subscribe(
      data=>console.log(data)
      
     
      
        
        
      
    );
    
    }
}
