import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery'
// import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  template: `<!-- To Render Calendar -->
             <ejs-calendar></ejs-calendar>`
})
export class CalenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  // icon_expand = "expand_more"

  showCalender() {
    this.showMe =! this.showMe;
    // this.icon_expand = 'icon_expand';
  }
  showMe : boolean= false;
  public minDate: Date = new Date("05/07/2017");
  public maxDate: Date = new Date("08/27/2017");
  public value: Date = new Date("05/16/2017");

}
