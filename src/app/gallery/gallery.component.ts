import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryImageComponent } from '../gallery-image/gallery-image.component'
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Item {
  imageSrc: string;
  imageAlt: string
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() gallerydata: Item[] = []
  @Input() showCount = false;

  // data: Item[] = [
  //   { imageSrc: 'assets\image\slider1.jpg', imageAlt: '1' },
  //   { imageSrc: 'assets\image\slider1.jpg', imageAlt: '2' },
  //   { imageSrc: 'assets\image\slider1.jpg', imageAlt: '3' },
  //   { imageSrc: 'assets\image\slider1.jpg', imageAlt: '4' },
  //   { imageSrc: 'assets\image\slider1.jpg', imageAlt: '5' }
  // ];
  // data: Item[] = [
    // { imageSrc: 'https://i.pinimg.com/736x/d4/8c/2d/d48c2de0debd3bef102256f979862bbd--group-photography-photography-tricks.jpg', imageAlt: '1' },
    // { imageSrc: 'https://media.istockphoto.com/photos/group-multiracial-people-having-fun-outdoor-happy-mixed-race-friends-picture-id1211345565?k=20&m=1211345565&s=612x612&w=0&h=Gg65DvzedP7YDo6XFbB-8-f7U7m5zHm1OPO3uIiVFgo=', imageAlt: '2' },
    // { imageSrc: 'https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?k=20&m=1146473249&s=612x612&w=0&h=9Ki3nKs4Su-_YRMc6__iuWnHLhpp58ULOsz4l9PT6tw=', imageAlt: '3' },
    // { imageSrc: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', imageAlt: '4' },
    // { imageSrc: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/join-us-banner?qlt=82&wid=1024&ts=1624538498965&fit=constrain', imageAlt: '5' },
  // ];


  onPreviewImg(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightBoxImage = this.gallerydata[index];
  }
  closePreview() {
    this.showMask = false;
  }
  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.gallerydata.length - 1;
    }
    this.currentLightBoxImage = this.gallerydata[this.currentIndex];
  }
  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex > this.gallerydata.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightBoxImage = this.gallerydata[this.currentIndex];
  }
  previewImage = false;
  showMask = false;
  currentLightBoxImage: Item = this.gallerydata[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  // ShowImage(){
    
    
  // }
  croped : any = true;
  croppedImage : any = true;
  upload_img(){
    this.gallerydata.push(this.croped.valueOf);
    this.crop_img = false;
  }
  imageChangedEvent: any = '';
  // croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    /* show cropper */
  }
  cropperReady() {
    /* cropper ready */
  }
  loadImageFailed() {
    /* show message */
  }
  crop_img : boolean = false;
  show_crop_img(){
    this.crop_img = true;
  }
  closeCropImg() {
    this.crop_img = false;
  }
  
}
