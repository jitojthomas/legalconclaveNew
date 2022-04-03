import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validation } from '../validation/validation';

import { AuthService } from 'src/app/core/services/auth.service';
import { LoginData } from 'src/app/core/interfaces/login-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css']
})
export class SigninSignupComponent implements OnInit {

  @Output() formData: EventEmitter<{
    email: string;
    password: string;
  }> = new EventEmitter();

//Validation Serach Option
form!: FormGroup;
form1!: FormGroup;
submitted = false;
submitted1 = false;
constructor(
  private formBuilder: FormBuilder,
  private readonly authService: AuthService,
  private readonly router: Router
  ) {}
login(loginData: LoginData) {
      this.authService
        .login(loginData)
        .then(() => this.router.navigate(['/user-dashboard']))
        .catch((e) => console.log(e.message));
    }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        loginid: ['', [Validators.required]],
        loginpass:['', [Validators.required]]
      }
    );
    this.form1 = this.formBuilder.group(
      {
        fname: ['', [Validators.required]],
        femail:['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password','confirmPassword')]
      }
    );
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  get f1(): { [key: string]: AbstractControl } {
    return this.form1.controls;
  }
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.formData.emit(this.form.value);
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onSubmit1(): void {
    this.submitted1 = true;

    if (this.form1.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form1.value, null, 2));
  }
}
function loginData(loginData: any, LoginData: any) {
  throw new Error('Function not implemented.');
}

function login(loginData: (loginData: any, LoginData: any) => void, LoginData: any) {
  throw new Error('Function not implemented.');
}

