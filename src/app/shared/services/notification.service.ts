import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../components/notification.component';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  show(message: string, duration = 3000): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      data: { message },
      duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['app-notification-snackbar']
    });
  }

  success(message: string, duration = 3000): void {
    this.show(`✅ ${message}`, duration);
  }

  error(message: string, duration = 3000): void {
    this.show(`❌ ${message}`, duration);
  }

  info(message: string, duration = 3000): void {
    this.show(`ℹ️ ${message}`, duration);
  }

  warning(message: string, duration = 3000): void {
    this.show(`⚠️ ${message}`, duration);
  }
} 