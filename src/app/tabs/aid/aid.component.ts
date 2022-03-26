import { Component, OnInit } from '@angular/core';
// import 'src\assets\js\aid.js'

@Component({
  selector: 'app-aid',
  templateUrl: './aid.component.html',
  styleUrls: ['./aid.component.css']
})
export class AidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data : any = [
    {
      title :  "Information Security Awareness",
      date : "01/02/2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Alert Mail _ Security",
      date: "11/01/2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    
  ]
  

}
