import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  infantCare1: string = 'assets/img/infant-care1.png';
  infantCare2: string = 'assets/img/infant-care2.png';
  infantCare3: string = 'assets/img/infant-care3.png';
  infantCare4: string = 'assets/img/infant-care4.png';
  infantCare5: string = 'assets/img/infant-care5.png';
  infantCare6: string = 'assets/img/infant-care6.png';
  infantCare7: string = 'assets/img/infant-care7.png';
  infantCare8: string = 'assets/img/infant-care8.png';
  infantCare9: string = 'assets/img/infant-care9.png';
  infantCare10: string = 'assets/img/infant-care10.png';
  infantCare11: string = 'assets/img/infant-care11.png';
  infantCare12: string = 'assets/img/infant-care12.png';
  infantCare13: string = 'assets/img/infant-care13.png';

  motherCare2: string = 'assets/img/mother-care2.png';
  motherCare3: string = 'assets/img/mother-care3.png';
  motherCare4: string = 'assets/img/mother-care4.png';
  motherCare5: string = 'assets/img/mother-care5.png';
  motherCare6: string = 'assets/img/mother-care6.png';

  service1: string = '';
  service2: string = '';
  service3: string = 'assets/img/service3.jpg';
  service4: string = 'assets/img/service4.jpg';

  medi1: string = "assets/img/medi1.png";
  medi2: string = "assets/img/medi2.png";
  medi3: string = "assets/img/medi3.png";
  medi4: string = "assets/img/medi4.png";

  food1: string = "assets/img/food1.png";
  food2: string = "assets/img/food2.png";
  food3: string = "assets/img/food3.png";
  food4: string = "assets/img/food4.png";
  food5: string = "assets/img/food5.png";

  bed: string = "";
  hide: boolean = false
  ipcam: string = "";
  round: string;
  // 삼성
  service4ss: string = "assets/img/service4ss.jpg";

  constructor(private router: Router, public _data: DataService) {
    this.router.navigate(['service']).then(() => { window.scrollTo(0, 0) });
    if (this._data.centerLocation == 'cd') {
      this.service1 = 'assets/img/service1.jpg';
      this.service2 = 'assets/img/service2.jpg';
      this.bed = '덕시아나 매트리스';
      this.ipcam = "1:1 신생아 IP캠으로 5명(조부모, 부모, 형제 등)이 동시에 아기를 24시간 관찰";
      this.round = "무지개 소아과 전문의 회진 주 2회";
    }else if(this._data.centerLocation == 'ss') {
      this.service1 = 'assets/img/ss/service1.jpg';
      this.service2 = 'assets/img/ss/service2.jpg';
      this.bed = '에르고 슬립 침대';
      this.hide = true;  
      this.ipcam = "어플을 통한 신생아 관찰, 어플로 동시에 총5명이 관찰";
      this.round = "무지개 소아과 전문의 회진 주 2회, 신생아 진료후 1대1 브리핑";
    }
  } 

  ngOnInit() {
  }
  

}
