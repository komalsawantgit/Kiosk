import { Component } from '@angular/core';
// import * as $ from 'jquery'
import { AuthService } from './auth.service';
import * as AOS from 'aos';

interface Item {
  imageSrc: string;
  imageAlt: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kiosk Development';
  
  ngOnInit(){
    AOS.init();
  }
  constructor(private _authService: AuthService){}

  // data: Item[] = [
  //   { imageSrc: 'assets\img\slider1.jpg', imageAlt: '1' },
  //   { imageSrc: 'assets\img\slider2.jpg', imageAlt: '2' },
  //   { imageSrc: 'assets\img\slider3.jpg', imageAlt: '3' },
  //   { imageSrc: 'assets\img\slider4.jpg', imageAlt: '4' },
  //   { imageSrc: 'assets\img\slider5.jpg', imageAlt: '5' }
  // ];

  
}


