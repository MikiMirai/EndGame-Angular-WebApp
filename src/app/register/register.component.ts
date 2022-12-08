import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  handleFormSubmit(value: {username: string; email: string; password: string;}): void{
    console.log(value);
  }
}
