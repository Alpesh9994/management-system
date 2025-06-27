import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['roles'] as string[];
    const user = this.auth['getUserFromStorage'](); // or expose a getUser() method
    if (user && expectedRoles && expectedRoles.includes(user.role)) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
} 