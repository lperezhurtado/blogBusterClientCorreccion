import { IUser } from './../model/generic';
import { IPage } from 'src/app/model/generic';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url: string = "http://localhost:8082/user";

  constructor(
    private oHttp: HttpClient
  ) {
  }

  getUserPlist(page: number, size: number, termino: string,strSortField: string, strOrderDirection: string): Observable<IPage<IUser>>{

    let params = new HttpParams()
    .set("filter", termino)
    .set("page", page)
    .set("size",size);

    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IUser>>(this.url, {params: params});
  }

  getOne(id: number): Observable<IUser> {
    return this.oHttp.get<IUser>(this.url + "/" + id);
  }

  deleteOne(id: number): Observable<IUser> {
    return this.oHttp.delete<IUser>(this.url + "/" + id);
  }
}
