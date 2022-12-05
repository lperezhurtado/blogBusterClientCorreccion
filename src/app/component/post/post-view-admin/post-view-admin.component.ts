import { HttpErrorResponse } from '@angular/common/http';
import { IPost } from 'src/app/model/generic';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/Post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './post-view-admin.component.html',
  styleUrls: ['./post-view-admin.component.css']
})
export class PostViewAdminComponent implements OnInit {

  id: number = 0;
  oPost: IPost;

  constructor(
    private oPostService: PostService,
    private oActivatedRouted: ActivatedRoute
  ) {
    this.id = oActivatedRouted.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oPostService.getOne(this.id)
    .subscribe({
      next: (resp: IPost) => {
        this.oPost = resp;
        console.log("entra al subscribe");
        console.log(resp);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

}
