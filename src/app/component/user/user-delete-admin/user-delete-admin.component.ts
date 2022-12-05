import { IUser } from './../../../model/generic';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  templateUrl: './user-delete-admin.component.html',
  styleUrls: ['./user-delete-admin.component.css']
})
export class UserDeleteAdminComponent implements OnInit {

  id: number = 0;
  oUser: IUser;

  constructor(
    private oActivedRoute: ActivatedRoute,
    private oUserService: UserService
  ) {
    this.id = oActivedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oUserService.getOne(this.id).subscribe({
      next:(resp: IUser) => {
        this.oUser = resp;
      }
    })
  }

  deleteOne() {
    this.oUserService.deleteOne(this.id).subscribe({
      next:(resp: IUser) => {
        this.oUser = resp;

      }
    })
  }

}
