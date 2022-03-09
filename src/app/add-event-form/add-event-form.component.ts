import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; 

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css']
})
export class AddEventFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEventFormComponent>) { }

  ngOnInit(): void {
  }
  selectedImage = [
    { 'url': 'assets/img/slider1.jpg' },
  ]
  url = "./assets/img/slider3.jpg";
  onselectedImage(e: any) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {
      this.url = event.target.result;
    }
    
  }

  // urls = [];
  // selectFile(event){
  //   if(event.target.files){
  //     for(let i = 0; i<File.length; i++){
  //       var reader = new FileReader()
  //         reader.readAsDataURL(event.target.files[i]);
  //         reader.onload=(event:any)=>{
  //           this.urls.push(event.target.result);
  //         }
  //     }
  //   }
  // }
}
