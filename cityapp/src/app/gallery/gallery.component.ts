import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private service: ImageService) { }

  ngOnInit() {
    this.service.getImgDetailList();
  }

}
