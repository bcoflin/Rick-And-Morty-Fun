import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLogin: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleLogin() {
  this.isLogin = true;
  }
  toggleRegister() {
    this.isLogin = false;
  }

}
