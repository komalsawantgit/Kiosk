import { Component, OnInit } from '@angular/core';
import { NotificationsComponent } from '../notifications/notifications.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private notification: MatBottomSheet, public _authService: AuthService) { }

  ngOnInit(): void {
  }
  // Hidden Log Out Option
  showPopover : boolean = false;
  showDropdown(){
    this.showPopover = !this.showPopover;
  }

  // Notifications
  notification_shown: boolean = false;
  openBottomSheet(): void {
    // this.notification.open(NotificationsComponent);
    this.notification_shown = true;
  }
  close_note(){
    this.notification_shown = false;
  }

  // Flash News
  flashNewsShowing : boolean = false;
  show_news(){
    this.flashNewsShowing = true;
  }
  close_flash_news(){
    this.flashNewsShowing = false;
  }
  notifier : any=[
    {
      imgSrc: 'assets\img\images.jpg',
      message_from: 'Kaustubh Mestri'
    }
  ]
  

}
