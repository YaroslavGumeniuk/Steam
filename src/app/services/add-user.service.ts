import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  constructor() { }

  users: User[] = []

  getData(): User[] {
    return this.users
  }
  addData(email: string, password: string) {
    this.users.unshift(new User(email, password))
  }
}
