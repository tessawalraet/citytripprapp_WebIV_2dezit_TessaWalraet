import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  numberList = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

  constructor(private service: TripService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form != null)
      form.reset();
    this.service.formData = {
      TripId: 0,
      Destination: '',
      Description: '',
      Highlight: '',
      Days: null,
      Related: '',
      Food: null,
      Weather: null,
      Experience: null
    }
  }

  onSubmit(form: NgForm) {
    if(this.service.formData.TripId == 0)
      this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postTrip(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Succesvol toegevoegd!', 'Mijn CityTripps');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
