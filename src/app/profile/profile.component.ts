import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  first_name: FormControl;
  last_name: FormControl;
  password: FormControl;
  username: FormControl;
  email: FormControl;


  constructor(
    private _fb: FormBuilder,
    private auth: AuthService,
    private router: Router)
  {
    this.getUser();
  }
  currentUser: any;

  getUser() {
    this.auth.getUser().subscribe((user) => {
      console.log(user);
      this.currentUser = user;
    });
  }

  ngOnInit() {

      this.first_name = new FormControl('');
      this.last_name = new FormControl('');
      this.password = new FormControl('');
      this.username = new FormControl('');

      this.profileForm = this._fb.group({
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username,
        password: this.password
      });
  }

  save(formValues) {
    let user = {
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      username: formValues.username,
      password: formValues.password,
      email: this.currentUser.email
    }
    this.auth.updateUser(user).subscribe((res) => {
      console.log('UPDATE RESPONSE', res);
      this.getUser();
    });
  }
  cancel() {
    this.router.navigate(['home']);
  }
  delete() {
    this.auth.deleteUser().subscribe((res) => {
      console.log('DELETE RESPOMSE', res);
      this.auth.resetUserObj();
      this.router.navigate(['/']);
    });
  }


}
