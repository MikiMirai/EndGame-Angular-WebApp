import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // handleFormSubmit(value: {username: string; email: string; password: string;}): void{
  //   console.log(value);
  // }

  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }
}