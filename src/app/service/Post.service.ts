import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage, IPost } from '../model/generic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private oHttp: HttpClient
  ) { }

  getPostPlist(page: number, size: number, termino: string, id_user: number,
    strSortField: string, strOrderDirection: string): Observable<IPage<IPost>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_user != 0) {
      params = params.set("user", id_user);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IPost>>("http://localhost:8082/post", { params: params });
  }

  getOne(id: number): Observable<IPost> {

    return this.oHttp.get<IPost>("http://localhost:8082/post/" + id);
  }


}
