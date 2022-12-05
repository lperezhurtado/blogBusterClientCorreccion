import { PostViewAdminComponent } from './component/post/post-view-admin/post-view-admin.component';
import { UserViewAdminComponent } from './component/user/user-view-admin/user-view-admin.component';
import { UserPlistAdminComponent } from './component/user/user-plist-admin/user-plist-admin.component';
import { PostPlistAdminComponent } from './component/post/PostPlistAdmin/PostPlistAdmin.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDeleteAdminComponent } from './component/user/user-delete-admin/user-delete-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostPlistAdminComponent },
  { path: 'user', component: UserPlistAdminComponent},
  { path: 'admin/user/view/:id', component: UserViewAdminComponent},
  { path: 'admin/user/delete/:id', component: UserDeleteAdminComponent},
  { path: 'admin/post/view/:id', component: PostViewAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
