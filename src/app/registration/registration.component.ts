import { Component } from '@angular/core';
import { AddUserService } from './../services/add-user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  items: User[] = []
  
  constructor(private router: Router, private addUser: AddUserService){ }

  addNewUser(){
    const currentUser: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.addUser.addData(currentUser.email, currentUser.password)
    this.items = this.addUser.getData()
    alert(`
      Registration successful
      your data:
      e-mail: ${this.items[0].email}
      password: ${this.items[0].password}
    `)
    console.log(this.items)
    this.router.navigate(['/login'])
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

}
