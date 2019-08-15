import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path:'', redirectTo:'/user/login', pathMatch:'full' },
    {
        path: 'user', component: UserComponent,
        children: [
          { path: 'register', component: RegisterComponent },
          { path: 'login', component: LoginComponent}
        ]
    }
]

@NgModule({
    declarations: [
        UserComponent,
        RegisterComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            progressBar: true
          }),
        RouterModule.forChild(routes)
    ],
    providers: [UserService],
    exports: [
        LoginComponent,
        RegisterComponent
  ]
})
export class UserModule {

}