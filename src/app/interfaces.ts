export interface User {
    email?: string
    password?: string
    age?: string
}

export class Person {
  constructor(public email: string, public name: string) {}
}