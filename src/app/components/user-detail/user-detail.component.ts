import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { User } from '../user/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
        .subscribe(user => this.user = user);
  }

  save(): void {
    this.userService.update(this.user)
        .then(() => this.goBack());
  }

  delete(user: User): void {
    this.userService
        .delete(user.id)
        .then(() => {
          this.location.back();
        })
  }

  goBack(): void {
    this.location.back();
  }
}
