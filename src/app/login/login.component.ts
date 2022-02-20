import { User } from './../interfaces';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router){ }
  ngOnInit(): void {}
  
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
  
  loginTrigger = false
  legalUser: User = {
    email: 'a@aaa',
    password: '111111'
  }

  @Output() onLegalUser: EventEmitter<User> = new EventEmitter<User>()

  submit() {
    if(this.form.invalid) {
      return
    }

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    if(this.legalUser.email !== user.email && this.legalUser.password !== user.password) {
      this.loginTrigger = true
      return
    }

    this.router.navigate(['/profile'])

  }
}
