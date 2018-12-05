import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: FormGroup;

  url = '/app/posts';

  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.http.get(this.url).subscribe(console.log);


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
