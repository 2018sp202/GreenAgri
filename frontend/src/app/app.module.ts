import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import{ FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { BuyersignupComponent } from './components/buyersignup/buyersignup.component';
import { AofficersignupComponent } from './components/aofficersignup/aofficersignup.component';
import { AofficerComponent } from './components/aofficer/aofficer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RequestsComponent } from './components/requests/requests.component';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';
  
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdmindashComponent } from './components/admindash/admindash.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ViewSubscribeComponent } from './components/view-subscribe/view-subscribe.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { ChartComponent } from './components/chart/chart.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ViewFarmerComponent } from './components/view-farmer/view-farmer.component';
import { LoanComponent } from './components/loan/loan.component';
import { ComplainComponent } from './components/complain/complain.component';
import { ViewcomplainComponent } from './components/viewcomplain/viewcomplain.component';
import { LoanviewComponent } from './components/loanview/loanview.component';
import { RelieffundComponent } from './components/relieffund/relieffund.component';
import { RelieffundviewComponent } from './components/relieffundview/relieffundview.component';
import { RequestComponent } from './components/request/request.component';
import { RequestviewComponent } from './components/requestview/requestview.component';
import { BuyerdashboardComponent } from './components/buyerdashboard/buyerdashboard.component';
import { FarmerdashboardComponent } from './components/farmerdashboard/farmerdashboard.component';
import { LoanviewxComponent } from './components/loanviewx/loanviewx.component';
import { ViewaoComponent } from './components/viewao/viewao.component';
import { LoantableComponent } from './components/loantable/loantable.component';
import { RequesttableComponent } from './components/requesttable/requesttable.component';
import { RelieffundtableComponent } from './components/relieffundtable/relieffundtable.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ComplaintableComponent } from './components/complaintable/complaintable.component';
import { ProductComponent } from './components/product/product.component';
import { ProducttableComponent } from './components/producttable/producttable.component';
import { CartComponent } from './components/cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { AuctionComponent } from './components/auction/auction.component';
import { BidComponent } from './components/bid/bid.component';
import { TakebidComponent } from './components/takebid/takebid.component';
import { Takebid2Component } from './components/takebid2/takebid2.component';
import { WinnerComponent } from './components/winner/winner.component';
import { ViewAuctionComponent } from './components/view-auction/view-auction.component';
import { FarmComponent } from './components/farm/farm.component';
import { AddfarmComponent } from './components/addfarm/addfarm.component';
import { ViewauctionfComponent } from './components/viewauctionf/viewauctionf.component';
import { ViewbidComponent } from './components/viewbid/viewbid.component';
import { ExpiredpComponent } from './components/expiredp/expiredp.component';
import { ExpiredaComponent } from './components/expireda/expireda.component';

   


@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    
    NavbarComponent,
    BuyersignupComponent,
              AofficersignupComponent,
              AofficerComponent,
              RequestsComponent,
              HomeComponent,
            
              AboutusComponent,
              FeaturesComponent,
              AboutComponent,
              ContactusComponent,
              OurservicesComponent,
              AdminComponent,
              AdmindashComponent,
              AdmindashboardComponent,
              ViewSubscribeComponent,
              ViewContactComponent,
              ChartComponent,
              ViewFarmerComponent,
              LoanComponent,
              ComplainComponent,
              ViewcomplainComponent,
              LoanviewComponent,
              RelieffundComponent,
              RelieffundviewComponent,
              RequestComponent,
              RequestviewComponent,
              BuyerdashboardComponent,
              FarmerdashboardComponent,
              LoanviewxComponent,
              ViewaoComponent,
              LoantableComponent,
              RequesttableComponent,
              RelieffundtableComponent,
              AddproductComponent,
              ComplaintableComponent,
              ProductComponent,
              ProducttableComponent,
              CartComponent,
              FilterPipe,
              AuctionComponent,
              BidComponent,
              TakebidComponent,
              Takebid2Component,
              WinnerComponent,
              ViewAuctionComponent,
              FarmComponent,
              AddfarmComponent,
              ViewauctionfComponent,
              ViewbidComponent,
              ExpiredpComponent,
              ExpiredaComponent
            
              
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    SlickCarouselModule,
    NgxPaginationModule,
    
    Ng2GoogleChartsModule
        
    
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
