import { Component, OnInit } from '@angular/core';
import { User } from './Users';
import { UserDetails } from './UserDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users!: User[];
  userForm: boolean | undefined;
  isNewUser: boolean | undefined;
  newUser: any = {};
  editUserForm: boolean | undefined;
  editedUser: any = {};

  constructor(private userDetails: UserDetails) { }

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers(): User[] {
    return this.userDetails.getUser();
  }

  showEditUserForm(user: User) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUser(user: User) {
    if (this.isNewUser) {
      // add a new user
      this.userDetails.addUser(user);
    }
    this.userForm = false;
  }

  updateUser() {
    this.userDetails.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: User) {
    this.userDetails.deleteUser(user);
  }

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }
}
