import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  constructor() { }

  users: User[] = [
    // { email: 'a@aaa', password: '111111' }
  ]

  getData(): User[] {
    console.log(this.users)
    return this.users
  }
  addData(email: string, password: string) {
    this.users.push(new User(email, password))
  }
}
