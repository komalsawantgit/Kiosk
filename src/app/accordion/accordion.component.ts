import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxContentComponent } from '../dialog-box-content/dialog-box-content.component';
import { AddEventFormComponent } from '../add-event-form/add-event-form.component'
// import { inputs } from '@syncfusion/ej2-angular-calendars/src/calendar/calendar.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }
  openDialog(){
    this.dialog.open(DialogBoxContentComponent)
  }
  show_addevent(): void{
    this.dialog.open(AddEventFormComponent)
  }
  ngOnInit(): void {
  }
  newEvent_form = "Information Security Awareness";

}
