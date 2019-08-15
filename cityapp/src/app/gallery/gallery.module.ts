import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { AuthGuard } from '../auth/auth.guard';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageComponent } from './image/image.component';
import { ScrollTopComponent } from '../scroll-top/scroll-top.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ImageService } from './image.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path:'gallery', component: GalleryComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'gallery/list', pathMatch: 'full' },
      { path:'list', component:ImageListComponent },
      { path:'upload', component: ImageComponent }
    ]
  }
]

@NgModule({
  declarations: [
    GalleryComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    RouterModule.forChild(routes)
  ],
  providers: [ImageService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GalleryModule { }
