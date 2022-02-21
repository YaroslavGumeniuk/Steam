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
  
  constructor(private router: Router, private addUser: AddUserService){ }

  addItem(){
    const currentUser: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.addUser.addData(currentUser.email, currentUser.password)
    this.items = this.addUser.getData()
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
  
  loginTrigger = false

  legalUser: User = {
    email: 'a@aaa',
    password: '111111'
  }

  submit() {

    if(this.form.invalid) {
      return
    }

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    if(this.legalUser.email !== user.email || this.legalUser.password !== user.password) {
      this.loginTrigger = true
      return
    }

    this.router.navigate(['/profile'])

  }
}
