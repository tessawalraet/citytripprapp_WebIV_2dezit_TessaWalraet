import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip.component';
import { DetailsComponent } from './details/details.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripFilterPipe } from './trip-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TripService } from './trip.service';
import { ToastrModule } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ScrollTopComponent } from '../scroll-top/scroll-top.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    TripComponent,
    DetailsComponent,
    TripListComponent,
    TripFilterPipe,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    RouterModule.forChild(routes)
  ],
  providers: [
    TripService
  ],
  exports: [
    HomeComponent
],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TripModule { }
