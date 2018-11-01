import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from "../data.service";

@Component({
  selector: 'app-main-feature',
  templateUrl: './main-feature.component.html',
  styleUrls: ['./main-feature.component.scss']
})
export class MainFeatureComponent implements OnInit {

  slide1 = "";
  slide2 = "";

  feature1_1:string = "";
  feature1_2:string = "";
  feature1_3:string = "";
  feature1_4:string = "";
  feature1_5:string = "";

  feature2_1:string = "";
  feature2_2:string = "";
  feature2_3:string = "";

  feature3_1:string = "";
  feature3_2:string = "";
  feature3_3:string = "";
  feature3_4:string = "";

  feature4_1:string = "";
  feature4_2:string = "";
  feature4_3:string = "";
  feature4_4:string = "";

  feature5_1:string = "";
  feature5_2:string = "";
  feature5_3:string = "";

  feature7_1:string = "assets/img/f7-1.jpg";
  feature7_2:string = "assets/img/f7-2.jpg";
  feature7_3:string = "assets/img/f7-3.jpg";
  feature7_4:string = "assets/img/f7-4.jpg";
  feature7_5:string = "assets/img/f7-5.jpg";
  feature7_6:string = "assets/img/f7-6.jpg";
  feature7_7:string = "assets/img/f7-7.jpg";
  feature7_8:string = "assets/img/f7-8.jpg";
  feature7_9:string = "assets/img/f7-9.jpg";

  feature1_2ss:string = "assets/img/1-2ss.jpg"
  feature6_3ss:string = "assets/img/6-3ss.jpg"

  config: Object = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    paginationClickable: true,
    pagination: '.swiper-pagination'
  }
 

  constructor(public _data: DataService) { 
    if (this._data.centerLocation == 'cd') {
      // 특징밑에 슬라이드
      this.slide1 = "assets/img/slide1.jpg";
      this.slide2 = "assets/img/slide4.jpg";
      // 특징 01
      this.feature1_1 = "assets/img/f1-1.jpg";
      this.feature1_2 = "assets/img/f1-2.jpg";
      this.feature1_3 = "assets/img/f1-3.jpg";
      this.feature1_4 = "assets/img/f1-4.jpg";
      this.feature1_5 = "assets/img/f1-5.jpg";
      // 특징 02
      this.feature2_1 = "assets/img/f2-1.jpg";
      this.feature2_2 = "assets/img/f2-2.jpg";
      this.feature2_3 = "assets/img/f2-3.jpg";
      // 특징 03
      this.feature3_1 = "assets/img/f3-1.jpg";
      this.feature3_2 = "assets/img/f3-2.jpg";
      this.feature3_3 = "assets/img/f3-3.jpg";
      // 특징 04
      this.feature4_1 = "assets/img/f4-1.jpg";
      this.feature4_2 = "assets/img/f4-2.jpg";
      this.feature4_3 = "assets/img/f4-3.jpg";
      this.feature4_4 = "assets/img/f4-4.jpg";
      // 특징 05
      this.feature5_1 = "assets/img/f5-1.jpg";
      this.feature5_2 = "assets/img/f5-2.jpg";
      this.feature5_3 = "assets/img/f5-3.jpg";

    }else if(this._data.centerLocation == 'ss') {
      console.log('삼성 들');
      // 특징밑에 슬라이드
      this.slide1 = "assets/img/ss/guide3.jpg";
      this.slide2 = "assets/img/ss/guide4.jpg";
      // 특징 01
      this.feature1_1 = "assets/img/ss/f1-1.jpg";
      this.feature1_2 = "assets/img/ss/f1-2.jpg";
      this.feature1_3 = "assets/img/ss/f1-3.jpg";
      this.feature1_4 = "assets/img/ss/f1-4.jpg";
      this.feature1_5 = "assets/img/ss/f1-5.jpg";
      // 특징 02
      this.feature2_1 = "assets/img/ss/f2-1.jpg";
      this.feature2_2 = "assets/img/ss/f2-2.jpg";
      this.feature2_3 = "assets/img/ss/f2-3.jpg";
      // 특징 03
      this.feature3_1 = "assets/img/ss/f3-1.jpg";
      this.feature3_2 = "assets/img/ss/f3-2.jpg";
      this.feature3_3 = "assets/img/ss/f3-3.jpg";
      // 특징 04
      this.feature4_1 = "assets/img/ss/f4-1.jpg";
      this.feature4_2 = "assets/img/ss/f4-2.jpg";
      this.feature4_3 = "assets/img/ss/f4-3.jpg";
      this.feature4_4 = "assets/img/ss/f4-4.jpg";
      // 특징 05
      this.feature5_1 = "assets/img/ss/f5-1.jpg";
      this.feature5_2 = "assets/img/ss/f5-2.jpg";
      this.feature5_3 = "assets/img/ss/f5-3.jpg";

    }
  }
  
  ngOnInit() {
    
  }

  

}
