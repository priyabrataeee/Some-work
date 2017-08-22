import { Component, OnInit } from '@angular/core';
import { Cookie }            from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId: String;
  firstName: String;
  lastName: String;
  email: String;

  constructor(

  ){ }

  ngOnInit() {
    this.userId = Cookie.get('userid')
    this.firstName = Cookie.get('fname')
    this.lastName = Cookie.get('lname')
    this.email = Cookie.get('email')
  }
}
