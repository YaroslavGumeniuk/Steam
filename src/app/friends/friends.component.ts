import { Person } from './../interfaces';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  persons: Person[] = []
  searchedPersons: Person[] = []
  friends: Person[] = []

  form: FormGroup = new FormGroup({
    searchInput: new FormControl(null),
  })

  ngOnInit(): void {
    this.http.get<Person[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(response => {
        this.persons = response
      })
  }

  textInput = ''
  onInput(){
    this.searchedPersons = []
    this.textInput = this.form.value.searchInput
    for (let i = 0; i < this.persons.length; i++) {
      if (this.persons[i].name.toLowerCase().indexOf(this.textInput) !== -1) {
        this.searchedPersons.push(this.persons[i])
      }
    }
    if(!this.textInput) {
      this.searchedPersons = []
    }
  }

  addFriend(event: any) {
    const currentPersonName = event.target.parentNode.childNodes[0].textContent
    for (let i = 0; i < this.friends.length; i++) {
      if (this.friends[i].name === currentPersonName) {
        alert('This person is in your friends already')
        event.target.disabled = 'true'
        return
      }
    }

    for (let i = 0; i < this.searchedPersons.length; i++) {
      if (this.searchedPersons[i].name === currentPersonName) {
        this.friends.push(this.searchedPersons[i])
        const myIndex = this.searchedPersons.indexOf(this.searchedPersons[i]);
        this.searchedPersons.splice(myIndex, 1);
      }
    }
  }

  removeFriend(event: any){
    const currentPersonName = event.target.parentNode.childNodes[0].textContent
    for (let i = 0; i < this.friends.length; i++) {
      if (this.friends[i].name === currentPersonName) {
        const myIndex = this.friends.indexOf(this.friends[i]);
        this.searchedPersons.push(this.friends[i])
        this.friends.splice(myIndex, 1);
      }
    }
  }

}
