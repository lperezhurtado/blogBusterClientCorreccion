import { UserService } from './../../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/model/generic';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {

  id: number;
  oUser: IUser;

  constructor(
    private oUserService: UserService,
    private oActivedRoute: ActivatedRoute,
  ) {
    this.id = oActivedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne(){
    this.oUserService.getOne(this.id)
    .subscribe({
      next: (resp: IUser) => {
        this.oUser = resp;
      }
    })
  }

}
