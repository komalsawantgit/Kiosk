import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bussiness-soln',
  templateUrl: './bussiness-soln.component.html',
  styleUrls: ['./bussiness-soln.component.css']
})
export class BussinessSolnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data: any = [
    {
      title: "Information Security Awareness",
      date: "01/02/2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Alert Mail _ Security",
      date: "11/01/2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]

// var cards = $("#card_event .event_card").toArray();
// var TweenMax;
// startAnim(cards);
// function startAnim(array) {
//   if (array.length >= 4) {
//     TweenMax.fromTo(
//       array[0],
//       0.5,
//       { x: 0, y: 0, opacity: 0.75 },
//       {
//         x: 0,
//         y: -120,
//         opacity: 0,
//         zIndex: 0,
//         delay: 0.03,
//         ease: Cubic.easeInOut,
//         onComplete: sortArray(array)
//       }
//     );



//     function sortArray(any:aray) {
//       clearTimeout(delay);
//       var delay = setTimeout(function () {
//         var firstElem = array.shift();
//         array.push(firstElem);
//         return startAnim(array);
//       }, 3000);
//     }
//     window.addEventListener("load", callbackFunc);
//     window.addEventListener("scroll", callbackFunc);

  }
