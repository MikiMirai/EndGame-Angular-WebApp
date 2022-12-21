import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
  }

}
