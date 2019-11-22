import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User, UserObject } from 'src/app/models/user.model';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { SnackBarService } from 'src/app/shared/services/snackbarservice';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  newUser: BehaviorSubject<any> = new BehaviorSubject<any>(this.auth.currentUser);
  loginForm: FormGroup;
  toggleRegister = false;
  token: any;
  user: User;

  @Output() openSignIn = new EventEmitter();

  constructor(
    private _fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snackBar: SnackBarService
    ) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit(formValues) {
    console.log(formValues);
    this.auth.userLogin(formValues.username, formValues.password).subscribe((res: UserObject) => {
     this.auth.userObject = res.user;
     if (!res) {
       this.snackBar.error('Fuck Off Summer!!');
     }
     if (res.sessionToken) {
         this.token = res.sessionToken;
         sessionStorage.setItem('token', this.token);
         this.auth.setCurrentUser(res.user);
         this.snackBar.success('Im PICKLE RIIIIIIIIICCCCCKKKK');
         this.router.navigate(['home']);
      } else {
       this.snackBar.error('Fuck Off Summer!');
      }
    });
  }
  openRegister() {
   this.toggleRegister = true;
   this.openSignIn.emit(this.toggleRegister);
  }

}
