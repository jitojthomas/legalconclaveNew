import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validation } from '../validation/validation';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
//Validation Serach Option
form!: FormGroup;
form1!: FormGroup;
submitted = false;
submitted1 = false;
constructor(private formBuilder: FormBuilder) {}

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
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  get f1(): { [key: string]: AbstractControl } {
    return this.form1.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

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
