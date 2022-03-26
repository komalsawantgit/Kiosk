import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-new-event',
  templateUrl: './form-new-event.component.html',
  styleUrls: ['./form-new-event.component.css']
})
export class FormNewEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createNewEvent:boolean=false;

}
