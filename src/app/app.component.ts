import { Component } from '@angular/core';

import { FormControl,FormControlName,FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formy';

  loginForm= new FormGroup({
    // user: new FormControl(''),
    user: new FormControl('qq'),
    password: new FormControl('qq')
  })
  loginFormOut() {
    console.log(this.loginForm.value)
  }

  
}
