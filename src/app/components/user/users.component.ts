import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { User } from './user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;
  newUser: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  getUsers(): void {
    this.userService
        .getUsers()
        .then(users => this.users = users);
  }

  ngOnInit() {
    this.getUsers();
    this.newUser = new User();
  }

  add(user: User): void {
    this.userService.create(user)
        .then(user => {
          this.users.push(user)
          this.selectedUser = null
        });
  }

  onSelect(user: User): void {
    this.router.navigate(['/user', user.id]);
  }

  gotoDetail(): void {
    this.router.navigate(['/user', this.selectedUser.id]);
  }

}
