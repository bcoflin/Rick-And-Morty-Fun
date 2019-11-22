import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard {
  constructor(private auth: AuthService) {}
  authenticated: boolean;

  canActivate(): boolean {
    return this.checkUserAuthenticaded();
  }

  checkUserAuthenticaded() {
   let token = sessionStorage.getItem('token');
   if (token !== null || undefined) {
     console.log('AUTHENTICATED');
     return true;
   } else {
     console.log('BACK TO THE DRAWING BORED');
     return false;
   }

  }
}
