import { AddUserService } from './../services/add-user.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  items: User[] = []

  constructor(private router: Router, private addUser: AddUserService) { }

  legalUsers = this.addUser.getData()

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

  onInput() {
    this.loginTrigger = false
  }

  login() {

    const currentUser: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    for (let i = 0; i < this.legalUsers.length; i++) {
      if (this.legalUsers[i].email !== currentUser.email || this.legalUsers[i].password !== currentUser.password) {
        this.loginTrigger = true
        return
      }

      if (this.legalUsers[i].email === currentUser.email && this.legalUsers[i].password === currentUser.password) {
        this.loginTrigger = false
        this.router.navigate(['/friends'])
      }
    }
  }
}
