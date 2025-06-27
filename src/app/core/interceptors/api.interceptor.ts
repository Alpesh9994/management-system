import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  // Optionally inject services like AuthService or LoggerService here
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Simulate CSRF token from localStorage (in real app, get from cookie or backend)
    const csrfToken = localStorage.getItem('csrf_token') || 'mock-csrf-token';
    const cloned = req.clone({
      setHeaders: {
        'X-CSRF-Token': csrfToken
      }
    });
    return next.handle(cloned).pipe(
      catchError((error: HttpErrorResponse) => {
        // Global error handling (log, show notification, etc.)
        // this.loggerService.log(error);
        return throwError(() => error);
      })
    );
  }
} 