import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EndGame-Angular-WebApp';

  constructor(public authService: AuthService) {}

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
}