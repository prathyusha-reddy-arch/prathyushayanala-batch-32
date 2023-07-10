import { Injectable } from '@angular/core';
import { Router, CanActivate,CanDeactivate} from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfileComponent } from '../profile/profile.component';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanDeactivate<ProfileComponent> {
    constructor(public router: Router, private authService: AuthService) {}
  
    canActivate() {
      const isLoggedIn = this.authService.isLoggedIn;
      console.log('isLoggedIn', isLoggedIn);
      if (!isLoggedIn) {
         // this.router.navigate(['/login']);
          return false;
      }
      return true;
    }
    canDeactivate(component: ProfileComponent): boolean {
      return confirm('Your changes will be lost. Are you sure you want to navigate away?');
    }
  }
  