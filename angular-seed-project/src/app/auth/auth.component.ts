import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';
import { User } from '../@objects/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user: User = new User();
  message;

  constructor(public cookie: CookieService, public router: Router ) { }

  ngOnInit() {
    console.log('reach login');
  }

  onLogin(){

    if(!this.user.username){
      this.message = "please enter a username"
      return;
    }

    if(!this.user.password){
      this.message = "please enter a password"
      return;
    }    
    this.cookie.put('username', this.user.username);
    this.router.navigate(['']);
  }
}
