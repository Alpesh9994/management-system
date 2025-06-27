import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  /**
   * Generic GET request
   */
  get<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, { params, headers });
  }

  /**
   * Generic POST request
   */
  post<T>(url: string, body: unknown, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, body, { params, headers });
  }

  /**
   * Generic PUT request
   */
  put<T>(url: string, body: unknown, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(url, body, { params, headers });
  }

  /**
   * Generic DELETE request
   */
  delete<T>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(url, { params, headers });
  }

  // Extend with more methods as needed (patch, head, etc.)
}
