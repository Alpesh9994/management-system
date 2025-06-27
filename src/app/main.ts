import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthService } from './features/auth/services/auth.service';
// import { AuthService } from './app/features/auth/services/auth.service';

// Ensure token expiry is checked on app start
const authService = new AuthService({ navigate: () => {} } as any);
authService.checkTokenExpiry();

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(),
    provideAnimations(),
  ],
}); 