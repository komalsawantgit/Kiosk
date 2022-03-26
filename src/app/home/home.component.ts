import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // data: Item[] = [
  //   { imageSrc: 'assets\img\slider1.jpg', imageAlt: '1' },
  //   { imageSrc: 'assets\img\slider2.jpg', imageAlt: '2' },
  //   { imageSrc: 'assets\img\slider3.jpg', imageAlt: '3' },
  //   { imageSrc: 'assets\img\slider4.jpg', imageAlt: '4' },
  //   { imageSrc: 'assets\img\slider5.jpg', imageAlt: '5' }
  // ];
  data: Item[] = [
    { imageSrc: 'https://i.pinimg.com/736x/d4/8c/2d/d48c2de0debd3bef102256f979862bbd--group-photography-photography-tricks.jpg', imageAlt: '1' },
    { imageSrc: 'https://media.istockphoto.com/photos/group-multiracial-people-having-fun-outdoor-happy-mixed-race-friends-picture-id1211345565?k=20&m=1211345565&s=612x612&w=0&h=Gg65DvzedP7YDo6XFbB-8-f7U7m5zHm1OPO3uIiVFgo=', imageAlt: '2' },
    { imageSrc: 'https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?k=20&m=1146473249&s=612x612&w=0&h=9Ki3nKs4Su-_YRMc6__iuWnHLhpp58ULOsz4l9PT6tw=', imageAlt: '3' },
    { imageSrc: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', imageAlt: '4' },
    { imageSrc: 'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/join-us-banner?qlt=82&wid=1024&ts=1624538498965&fit=constrain', imageAlt: '5' },
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyxLBorW2_VJPhK-kWrjf1UiwHFc2w-1GPw&usqp=CAU', imageAlt: '6' },
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIbUXPoxlRLciG6RIgPOk6a_nsKZviWLImw&usqp=CAU', imageAlt: '7' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}




