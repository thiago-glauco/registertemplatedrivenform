import { Component, OnInit } from '@angular/core';
import { User } from '../common/user';
import { USERS } from '../common/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  testUser: User = USERS[0];
  genders: string[] = ['male', 'female', 'other', 'not informed'];
  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    console.log( this.testUser );
  }

}