import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './components/login/login.component';
import{SignupComponent} from './components/signup/signup.component';
import{ProfileComponent} from './components/profile/profile.component';
import { AfterloginService } from './services/afterlogin.service';
import { BeforeloginService } from './services/beforelogin.service';
import { AofficersignupComponent } from './components/aofficersignup/aofficersignup.component';
import { BuyersignupComponent } from './components/buyersignup/buyersignup.component';
import { AofficerComponent } from './components/aofficer/aofficer.component';
import { RequestsComponent } from './components/requests/requests.component';
import { HomeComponent } from './components/home/home.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdmindashComponent } from './components/admindash/admindash.component';
import { ViewSubscribeComponent } from './components/view-subscribe/view-subscribe.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ChartComponent } from './components/chart/chart.component';
import { ViewFarmerComponent } from './components/view-farmer/view-farmer.component';
import { LoanComponent } from './components/loan/loan.component';
import { ComplainComponent } from './components/complain/complain.component';
import { ViewcomplainComponent } from './components/viewcomplain/viewcomplain.component';

import { LoanviewComponent } from './components/loanview/loanview.component';
import { BuyerdashboardComponent } from './components/buyerdashboard/buyerdashboard.component';
import { FarmerdashboardComponent } from './components/farmerdashboard/farmerdashboard.component';
import { RequestComponent } from './components/request/request.component'; 
import { RelieffundComponent } from './components/relieffund/relieffund.component';
import { LoanviewxComponent } from './components/loanviewx/loanviewx.component';
import { RelieffundviewComponent } from './components/relieffundview/relieffundview.component';
import { RequestviewComponent } from './components/requestview/requestview.component';
import { ViewaoComponent } from './components/viewao/viewao.component';
import { LoantableComponent } from './components/loantable/loantable.component';
import { RequesttableComponent } from './components/requesttable/requesttable.component';
import { RelieffundtableComponent } from './components/relieffundtable/relieffundtable.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ComplaintableComponent } from './components/complaintable/complaintable.component';
import { ProductComponent } from './components/product/product.component';
import { ProducttableComponent } from './components/producttable/producttable.component';
import { CartComponent } from './components/cart/cart.component';
import { AuctionComponent } from './components/auction/auction.component';
import { BidComponent } from './components/bid/bid.component';
import { TakebidComponent } from './components/takebid/takebid.component';
import { Takebid2Component } from './components/takebid2/takebid2.component';
import { WinnerComponent } from './components/winner/winner.component';
import { ViewAuctionComponent } from './components/view-auction/view-auction.component';
import { AddfarmComponent} from './components/addfarm/addfarm.component';
import { FarmComponent } from './components/farm/farm.component';
import { ViewauctionfComponent } from './components/viewauctionf/viewauctionf.component';
import { ViewbidComponent } from './components/viewbid/viewbid.component';
import { ExpiredaComponent } from './components/expireda/expireda.component';
import { ExpiredpComponent } from './components/expiredp/expiredp.component';
const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
{
  path:'login',
component:LoginComponent,
  canActivate:[BeforeloginService]
},
{
  path:'signup',
component:SignupComponent,

},

{
path:'buyersignup',
component:BuyersignupComponent,

},
{
  path:'aosignup',
component:AofficersignupComponent,

},
{
  path:'Aofficer',
component:AofficerComponent,

},
{
  path:'admind',
component:AdmindashComponent,

},

{
  path:'profile',
component:ProfileComponent,
canActivate:[AfterloginService]
},

{
  path:'p',
component:RequestsComponent,

},
{
  path:'product',
component:ProductComponent,

},
{
  path:'expiredp',
component:ExpiredpComponent,

},
{
  path:'expireda',
component:ExpiredaComponent,

},

{
  path:'bid',
component:BidComponent,

},
{
  path:'winner',
component:WinnerComponent,

},

{
  path:'auction',
component:AuctionComponent,

},
{
  path:'auctionf',
component:ViewauctionfComponent,

},
{
  path:'viewbid',
component:ViewbidComponent,

},
{
  path:'producttable',
component:ProducttableComponent,

},
{
  path:'complain',
component:ComplainComponent,

},
{
  path:'addproduct',
component:AddproductComponent,

},

{
  path:'complainview',
component:ViewcomplainComponent,

},
{
  path:'ourservice',
component:OurservicesComponent,

},
{
  path:'admin',
component:AdminComponent,

},
{
  path:'farm',
component:AddfarmComponent,

},
{
  path:'farmtable',
component:FarmComponent,

},
{
  path:'takebid',
component:TakebidComponent,

},
{
  path:'takebid2',
component:Takebid2Component,

},
{
  path:'loan',
component:LoanComponent,

},
{
  path:'cart',
component:CartComponent,

},
{
  path:'loantable',
component: LoantableComponent 

},
{
  path:'complaintable',
component: ComplaintableComponent 

},
{
  path:'requestable',
component: RequesttableComponent 

},
{
  path:'relieftable',
component: RelieffundtableComponent 

},
{
  path:'loanx',
component:LoanviewxComponent,

},
{
  path:'doubt',
component:RequestComponent,

},
{
  path:'relief',
component:RelieffundComponent,

},
{
  path:'view-subscribe',
  component:ViewSubscribeComponent ,
},
{
  path:'view-contact',
  component:ViewContactComponent ,
},

{
  path:'home',
component:HomeComponent,

},
{
  path:'feature',
component:FeaturesComponent,

},
{
  path:'aboutus',
component:AboutusComponent,

},
{
  path:'about',
component:AboutComponent,

},
{
  path:'contact',
component:ContactusComponent,

},

{
  path:'chart',
component:ChartComponent,

},
{
  path:'viewFarmer',
component:ViewFarmerComponent,

},
{
  path:'viewAo',
component:ViewaoComponent,

},
{
  path:'viewloan',
component:LoanviewComponent,

},
{
  path:'viewrelief',
component:RelieffundviewComponent,

},
{
  path:'viewauction',
component:ViewAuctionComponent,

},
{
  path:'viewrequest',
component:RequestviewComponent,

},
{
  path:'buyerdashboard',
component:BuyerdashboardComponent,

},
{
  path:'farmerdashboard',
component:FarmerdashboardComponent,

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
