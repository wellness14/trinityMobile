import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-expert',
  templateUrl: './main-expert.component.html',
  styleUrls: ['./main-expert.component.scss']
})
export class MainExpertComponent implements OnInit {

  profile1: string = "assets/img/profile1.jpg";
  profile2: string = "assets/img/profile2.jpg";
  profile3: string = "assets/img/profile3.jpg";
  profile4: string = "assets/img/profile4.jpg";


  config: Object = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    paginationClickable: true,
    pagination: '.swiper-pagination'
  }

  constructor() { }

  ngOnInit() {
  }

}
