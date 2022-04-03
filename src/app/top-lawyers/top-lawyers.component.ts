import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-lawyers',
  templateUrl: './top-lawyers.component.html',
  styleUrls: ['./top-lawyers.component.css']
})
export class TopLawyersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    { img: "assets/images/lawyer/1.png", name: 'SWATI PANDURANGA' },
    { img: "assets/images/lawyer/2.png", name: 'SWATI PANDURANGA' },
    { img: "assets/images/lawyer/3.png", name: 'SWATI PANDURANGA' },
    { img: "assets/images/lawyer/4.png", name: 'SWATI PANDURANGA' },
  ];
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  };


  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

}
