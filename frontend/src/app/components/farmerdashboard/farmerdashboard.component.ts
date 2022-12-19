import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-farmerdashboard',
  templateUrl: './farmerdashboard.component.html',
  styleUrls: ['./farmerdashboard.component.css']
})
export class FarmerdashboardComponent implements OnInit {

  constructor(private Auth:AuthService, private router:Router, private token:TokenService) { }


  ngOnInit(): void {
  }
  logout(event:MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/home');
  }
}
