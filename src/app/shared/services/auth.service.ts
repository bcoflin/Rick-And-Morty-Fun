import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class AuthService {
  userObject: any;
  email = sessionStorage.getItem('email');
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(this.userObject);

  constructor(private http: HttpClient) {
  }
  resetUserObj() {
    this.userObject = null;
  }
  userLogin(username: string, password: string) {
    return this.http.post('http://localhost:3000/user/signin', {user: {username: username, password: password }});
  }
  createUser(user: User) {
    return this.http.post('http://localhost:3000/user/create', {user});
  }
  updateUser(user) {
    return this.http.put(`http://localhost:3000/user/update/${this.userObject.id}`,
    // tslint:disable-next-line:max-line-length
    {user: {first_name: user.first_name, last_name: user.last_name, username: user.username, password: user.password, email: this.email, admin: false}});
  }
  tokenAuthenticated(data: boolean) {
    return data;
  }
  getUser() {
    return this.http.get(`http://localhost:3000/user/${this.userObject.id}`);
  }
  deleteUser() {
    console.log('service')
    return this.http.delete(`http://localhost:3000/user/delete/${this.userObject.id}`)
  }
  setCurrentUser(user) {
    this.currentUser.next(this.userObject);
  }
}
