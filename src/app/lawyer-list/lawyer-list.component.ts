import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lawyer-list',
  templateUrl: './lawyer-list.component.html',
  styleUrls: ['./lawyer-list.component.css']
})
export class LawyerListComponent implements OnInit {
  //Validation Serach Option
  form!: FormGroup;
submitted = false;
constructor(private formBuilder: FormBuilder) {}

ngOnInit(): void {
  this.form = this.formBuilder.group(
    {
      fullname: ['', [Validators.required, Validators.minLength(3)]]
    }
  );
}
get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}

onSubmit(): void {
  this.submitted = true;

  if (this.form.invalid) {
    return;
  }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
}

