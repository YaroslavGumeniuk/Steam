import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserService } from './services/add-user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Steam';

  items: User[] = []

  constructor(private router: Router, private showUser: AddUserService){  }
  
  goToLoginPage() {
    // this.items = this.showUser.getData()
    this.router.navigate(['/login'])
  }

  goToRegistrationPage(){
    this.router.navigate(['/'])
  }

}
