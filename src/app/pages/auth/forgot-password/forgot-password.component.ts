import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }

  submit() {
    
  }
}
