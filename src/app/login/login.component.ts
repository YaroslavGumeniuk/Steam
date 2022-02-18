import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor() {
  }
  
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required, 
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ])
  })
  ngOnInit(): void {}

  submit() {
    console.log(this.form)
    if(this.form.invalid) {
      return
    }

  }

}
