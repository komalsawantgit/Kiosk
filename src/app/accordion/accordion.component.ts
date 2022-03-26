import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  // Value declaration for deafult accordion
  subtitle = "Information Security Awareness";
  title = "Business Solution";

  // Form Declaration
  userForm: FormGroup;
  listDate: any;
  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.listDate = [];
    this.userForm = this.fb.group({
      add_topic: ['', Validators.required],
      select_subtopic: ['', Validators.required],
      add_desc: ['', Validators.required],
    })
  }

  // Reset Hidden Form
  resetForm(){
    this.userForm.reset()
  }

  // Add events
  public addItem(): void {
    this.listDate.unshift(this.userForm.value);
    this.userForm.reset();
    this.create_new_event = false;
    this.add_event = true;
    this.delete_event = false;
  }
  ngOnInit(): void {}
  
  // Show hidden form to add new events
  create_new_event: boolean = false;
  delete_event: boolean = false;
  add_event: boolean = true;

  // Show hidden form
  show_addevent(): void {
    this.create_new_event = true;
    this.delete_event = true;
    this.add_event = false;
  }

  // Hide showed form
  show_dltevent(): void {
    this.create_new_event = false;
    this.delete_event = false;
    this.add_event = true;
  }

  // Modal to show event descriptions
  showMask : boolean = false;
  openDialog(): void {
    this.showMask = true;
  }

  // close modal description
  close_modal(){
    this.showMask = false;
  }
}
