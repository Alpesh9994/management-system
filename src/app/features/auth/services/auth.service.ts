import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

export interface AuthUser {
  id: number;
  username: string;
  email: string;
  role: string; // e.g., 'Admin', 'Manager', 'Employee'
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';
  private readonly USER_KEY = 'auth_user';
  private readonly EXPIRY_KEY = 'auth_token_expiry';
  private userSubject = new BehaviorSubject<AuthUser | null>(this.getUserFromStorage());
  user$ = this.userSubject.asObservable();
  private logoutTimer: number | undefined;
  private router = inject(Router);

  // Mock login: accepts any username/password, returns a fake JWT
  login(username: string): Observable<boolean> {
    const fakeToken = 'mock-jwt-token';
    const fakeRefreshToken = 'mock-refresh-token';
    const fakeUser: AuthUser = { id: 1, username, email: username + '@example.com', role: 'Admin' };
    const expiresIn = 60 * 1000; // 1 minute for demo
    const expiry = Date.now() + expiresIn;
    localStorage.setItem(this.TOKEN_KEY, fakeToken);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, fakeRefreshToken);
    localStorage.setItem(this.USER_KEY, JSON.stringify(fakeUser));
    localStorage.setItem(this.EXPIRY_KEY, expiry.toString());
    this.userSubject.next(fakeUser);
    this.setLogoutTimer(expiresIn);
    return of(true);
  }

  // Mock register: always succeeds
  register(): Observable<boolean> {
    return of(true);
  }

  // Mock refresh token: returns a new fake JWT
  refreshToken(): Observable<string> {
    const refreshToken = localStorage.getItem(this.REFRESH_TOKEN_KEY);
    if (refreshToken) {
      const newToken = 'mock-jwt-token-' + Date.now();
      localStorage.setItem(this.TOKEN_KEY, newToken);
      return of(newToken);
    }
    return of('');
  }

  logout(): void {
    if (this.logoutTimer) clearTimeout(this.logoutTimer);
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.EXPIRY_KEY);
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Call this on app start to check for token expiration
  checkTokenExpiry() {
    const expiry = +(localStorage.getItem(this.EXPIRY_KEY) || 0);
    if (expiry && Date.now() > expiry) {
      this.logout();
    } else if (expiry) {
      this.setLogoutTimer(expiry - Date.now());
    }
  }

  private setLogoutTimer(ms: number) {
    if (this.logoutTimer) clearTimeout(this.logoutTimer);
    this.logoutTimer = window.setTimeout(() => this.logout(), ms);
  }

  private getUserFromStorage(): AuthUser | null {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  /**
   * Example stub for future migration to HttpOnly cookies
   * In a real app, the backend would set the token in a secure, HttpOnly cookie.
   */
  setTokenWithHttpOnlyCookie(): void {
    // This is just a placeholder for future implementation.
    // In Angular, you do NOT access HttpOnly cookies from JS.
    // The browser will send them automatically with requests.
  }
}
