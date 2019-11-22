import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User, UserObject } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  ngUnsubscribe: Subject<any> = new Subject();
  registerForm: FormGroup;
  user: UserObject;
  toggleLogin: boolean = false;
  token: any;

  @Output() openLogin = new EventEmitter()

  constructor(
    private _fb: FormBuilder,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.registerForm = this._fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  closeRegister() {
    this.toggleLogin = true;
    this.openLogin.emit(this.toggleLogin);
  }
  createNewUser(formValues) {
    this.auth.createUser(formValues).subscribe((newUser: UserObject) => {
      this.auth.userObject = newUser.user;
      sessionStorage.setItem('id', newUser.user.id.toString());
      this.token = newUser.sessionToken;
      sessionStorage.setItem('token', this.token);
      this.router.navigate(['/home']);
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
