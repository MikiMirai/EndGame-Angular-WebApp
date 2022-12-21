import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  passwordCheck: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  registerHandler(form: NgForm) {
    if (form.invalid) { return; }
    const { email, password, rePassword } = form.value;
    if (password == rePassword) {
      this.passwordCheck = true;

      this.authService.register(email!, password!, rePassword!)
        .subscribe(user => {
          this.router.navigate(['/']);
        });
    }
  }
}