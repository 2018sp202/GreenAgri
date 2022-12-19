import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public loggedIn:boolean= false;
  constructor(private Auth:AuthService, private router:Router, private token:TokenService) { }

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(
      value=>
        this.loggedIn= value
      
      
      
    );
  }
logout(event:MouseEvent){
  event.preventDefault();
  this.token.remove();
  this.Auth.changeAuthStatus(false);
  this.router.navigateByUrl('/home');
}
btnClick() {
  this.router.navigateByUrl('/login');
};

}
