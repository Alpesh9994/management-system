import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  private auth = inject(AuthService);
  private router = inject(Router);

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
