import { Component, inject } from '@angular/core';
import { AuthService, AuthUser } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ProfileComponent {
  user$: Observable<AuthUser | null>;
  private auth = inject(AuthService);
  constructor() {
    this.user$ = this.auth.user$;
  }
}
