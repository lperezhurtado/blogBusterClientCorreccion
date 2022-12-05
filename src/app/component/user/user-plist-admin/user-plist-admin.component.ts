import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from './../../../service/user.service';
import { IUser } from './../../../model/generic';
import { IPage } from 'src/app/model/generic';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './user-plist-admin.component.html',
  styleUrls: ['./user-plist-admin.component.css']
})
export class UserPlistAdminComponent implements OnInit {

  response: IPage<IUser>;

  strTermFilter: string = "";
  id_usertypeFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oUserService: UserService
  ) { }

  ngOnInit(): void {
    this.getPage()
  }

  getPage() {
    this.oUserService.getUserPlist(this.page,this.numberOfElements,this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp: IPage<IUser>) => {
        this.response = resp;
        if (this.page > resp.totalPages - 1) {
          this.page = resp.totalPages - 1;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByUsertype(id: number): void {
    this.id_usertypeFilter = id;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

}
