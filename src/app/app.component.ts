import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form =new FormGroup({
    username: new FormControl('',[Validators.required,
    Validators.minLength(3)]),
    password: new FormControl('', Validators.required)
  })
  title = 'Login';
  
  login(){
    this.form.setErrors({
      invalidLogin: true

    });
}
  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}
