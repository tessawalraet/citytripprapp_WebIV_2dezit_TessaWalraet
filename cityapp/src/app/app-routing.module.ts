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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  
  //,
  { 
    path:'', 
    loadChildren:  () => import('./user/user.module').then(mod => mod.UserModule)
  },
  { 
    path:'', 
    canActivate: [AuthGuard],
    loadChildren:  () => import('./trip/trip.module').then(mod => mod.TripModule)
  },
  {
    path:'',
    canActivate: [AuthGuard],
    loadChildren: () => import('./gallery/gallery.module').then(mod => mod.GalleryModule)
  },
  { path: 'UserProfile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
