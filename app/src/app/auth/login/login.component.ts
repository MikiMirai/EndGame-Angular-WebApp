import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { appEmailDomains } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  appEmailDomains = appEmailDomains;

  @ViewChild(
    NgForm,
    { static: true }
  ) form!: ElementRef<HTMLInputElement>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {

  }

  loginHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { email, password } = form.value;
    this.authService.login(email!, password!)
      .subscribe(user => {
        this.router.navigate(['/']);
      });

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
}