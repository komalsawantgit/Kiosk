import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryImageComponent } from '../gallery-image/gallery-image.component'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  ShowImage(){
    // alert("Image is here")
    // this.dialog.open(GalleryImageComponent).
    
  }
  // select_image(){
  //   let images = [
  //     {img : 'assets\img\slider1.jpg'},
  //     {img : 'assets\img\slider1.jpg'},
  //     {img : 'assets\img\slider1.jpg'},
  //   ]
  // }
}
