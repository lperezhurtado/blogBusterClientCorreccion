import { IUser } from './../../../model/generic';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './user-view-admin.component.html',
  styleUrls: ['./user-view-admin.component.css']
})
export class UserViewAdminComponent implements OnInit {


  constructor(
    private oActivedRoute: ActivatedRoute,
    private oUserService: UserService
  ) {

  }

  ngOnInit(): void {
  }

}
