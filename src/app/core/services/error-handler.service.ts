import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  /**
   * Handle an error (log, notify, etc.)
   */
  handleError(error: unknown, context?: string): void {
    // Log to console (extend with remote logging, Sentry, etc.)
    console.error(`[Error${context ? ' in ' + context : ''}]`, error);
    // TODO: Show user-friendly notification (e.g., toast)
    // TODO: Integrate with external monitoring if needed
  }

  /**
   * Log a warning
   */
  logWarning(message: string, context?: string): void {
    console.warn(`[Warning${context ? ' in ' + context : ''}]`, message);
  }

  /**
   * Log an info message
   */
  logInfo(message: string, context?: string): void {
    console.info(`[Info${context ? ' in ' + context : ''}]`, message);
  }
}
