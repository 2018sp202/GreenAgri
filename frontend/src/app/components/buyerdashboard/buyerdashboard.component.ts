import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import{Router} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { BackendService } from 'src/app/services/backend.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-buyerdashboard',
  templateUrl: './buyerdashboard.component.html',
  styleUrls: ['./buyerdashboard.component.css']
})
export class BuyerdashboardComponent implements OnInit {

  days:any;
  hours:number;
  mins:number;
  secs:number;
  public datex:any;
  


  public productList : any ;
  public productListx : any ;
  p:any;
  email:'';
  veh_name:'';
  searchKey:string ="";
  winner:any;
  enddates=[];
  editArray: any[];
  x:any
  id:any;
  public filterCategory : any;
  public totalItem : number = 0;
  public searchTerm !: string;

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
  

  constructor(private api : ApiService, private cartService : CartService, private router:Router, private backend : BackendService,private Auth:AuthService, private token:TokenService,private route: ActivatedRoute) { }
   

  ngOnInit(): void {
    
    this.getDate()
    this.getWinner()
   // this.id=this.route.snapshot.params['id'];
    
  this.api.getProduct()
  .subscribe(res=>{
    this.productList = res;
    this.filterCategory = res;
    
    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price, });
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })

  }
 
  getDate(){
    this.backend.getdate().subscribe(res=>{
    this.datex=res;
    //console.log(this.datex);
  
    })
  }
  getWinner(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.backend.getwinner().subscribe(res=>{
    this.winner=res;
    //console.log(this.winner);
    this.winner = this.winner.filter(pd=>{
      return pd.buyer_id == user.id
    })
    this.totalItem = this.winner.length;
    })
  }
 
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(producttype:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.producttype == producttype || producttype==''){
        return a;
      }
    })
  
  
    this.cartService.getProducts()
    .subscribe(res=>{
     // this.totalItem = res.length;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    //console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  
  goEdit(data) {
   
    this.editArray = this.filterCategory.filter(f => f.id == data);
    
    this.router.navigate(['/takebid2'], {queryParams: {  id: data}});

    this.api.setEditChairArray(this.editArray);
console.log(this.editArray);
    
  }
  
  
  logout(event:MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/home');
  }
 
  
  }




 
  
  
