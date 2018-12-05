import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder){

    this.form = this.fb.group({
      username: [''], // , Validators.required.forbiddenNameValidator()],
      password: '',
      age: [0, Validators.max(5)]
    });

    this.form.patchValue({
      username: 'juan',
      password: '1234'
    });

  }

  onSubmit(event) {
    console.log(event);
  }


}
