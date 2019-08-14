import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imgDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImgDetailList() {
    this.imgDetailList = this.firebase.list('imgDetails');
  }

  insertImgDetails(imgDetails) {
    this.imgDetailList.push(imgDetails);
  }
}
