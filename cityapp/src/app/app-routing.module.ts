import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './gallery/image/image.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';

const routes: Routes = [
  { path:'', redirectTo:'/user/login', pathMatch:'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent}
    ]
  },
  { path:'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'UserProfile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path:'gallery', component: GalleryComponent, canActivate: [AuthGuard],
    children: [
      { path:'upload', component: ImageComponent }, //gallery/upload
      { path:'list', component:ImageListComponent } //gallery/list
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
