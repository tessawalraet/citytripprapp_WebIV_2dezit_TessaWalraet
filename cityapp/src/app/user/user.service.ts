import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly BaseURI = 'http://localhost:62999/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    FirstName: [''],
    LastName: [''],
    Email: ['', Validators.email],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(3)]],
      ConfirmPassword: ['', Validators.required]
    }, {validator: this.comparePasswords})
  });

  comparePasswords(fb: FormGroup) {
    let confirmPasswordControl = fb.get('ConfirmPassword');
    if (confirmPasswordControl.errors == null || 'passwordMismatch' in confirmPasswordControl.errors) {
      if (fb.get('Password').value != confirmPasswordControl.value)
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      else
        confirmPasswordControl.setErrors(null);
    }
  }

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      FirstName: this.formModel.value.FirstName,
      LastName: this.formModel.value.LastName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/AppUser/Register', body);
  }
}
