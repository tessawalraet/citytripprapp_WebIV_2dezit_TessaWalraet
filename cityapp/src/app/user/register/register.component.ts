import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('Nieuwe gebruiker is aangemaakt.', 'Registratie is succesvol.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Gebruikersnaam reeds in gebruik!','Registratie is gefaald!');
                break;

              default:
                this.toastr.error(element.description,'Registratie is gefaald!');
                break;
            }
          });       
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
