import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { RoundPipe } from "../round.pipe";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  show: boolean = false;
  closeBtn = "assets/img/cross-white.png";
  centerLocation: string = this._data.centerLocation;
  is_ss:boolean = false;

  reserve: string = '';
  rooming: string = '';
  agree: string = '';
  visit: string = '';

  // 할인율
  dc: number = 0.95;
  // 방이름
  dr1name: string = '';
  dr2name: string = '';
  dr3name: string = '';
  dr4name: string = '';
  // 2주 기본 금액, Default Room : DR
  dr1: number;
  dr2: number;
  dr3: number;
  dr4: number;
  // 2주 바디케어 포함 금액, Body Care Room : BCR
  bcr1: number;
  bcr2: number;
  bcr3: number;
  bcr4: number;
  // 원가
  dr1cost: number;
  dr2cost: number;
  dr3cost: number;
  dr4cost: number;
  bcr1cost: number;
  bcr2cost: number;
  bcr3cost: number;
  bcr4cost: number;
  // 남편식사
  fatherFood1: number;
  fatherFood2: number;
  fatherFood3: number;
  fatherFood4: number;
  // 바디케어포함 바디케어횟수
  bdcare1: number;
  bdcare2: number;
  bdcare3: number;
  bdcare4: number;

  constructor(private router: Router, public _data: DataService) { 
    this.router.navigate(['price']).then(() => { window.scrollTo(0, 0) });
    if (this._data.centerLocation == 'cd') {
      this.reserve = 'assets/img/reserve.jpg';
      this.rooming = 'assets/img/rooming.jpg';
      this.agree = 'assets/img/agree.jpg';
      this.visit = 'assets/img/visit.jpg';
      this.is_ss = false;

      this.dr1 = 480;
      this.dr2 = 440;
      this.dr3 = 430;

      this.bcr1 = 584;
      this.bcr2 = 492;
      this.bcr3 = 479;

      this.dr1name = 'VIP';
      this.dr2name = 'PREMIUM I';
      this.dr3name = 'PREMIUM II';

      this.dr1cost = 700;
      this.dr2cost = 600;
      this.dr3cost = 550;
      this.bcr1cost = 820;
      this.bcr2cost = 660;
      this.bcr3cost = 595;

      this.fatherFood1 = 5;
      this.fatherFood2 = 3;
      this.fatherFood3 = 1;

      this.bdcare1 = 12;
      this.bdcare2 = 8;
      this.bdcare3 = 7;


    } else if (this._data.centerLocation == 'ss') {
      this.reserve = 'assets/img/ss/guide1.jpg';
      this.rooming = 'assets/img/ss/guide2.jpg';
      this.agree = 'assets/img/ss/guide3.jpg';
      this.visit = 'assets/img/ss/guide4.jpg';
      this.is_ss = true;

      this.dr1 = 530;
      this.dr2 = 480;
      this.dr3 = 440;
      this.dr4 = 430;

      this.bcr1 = 634;
      this.bcr2 = 584;
      this.bcr3 = 492;
      this.bcr4 = 479;

      this.dr1name = 'VVIP';
      this.dr2name = 'VIP';
      this.dr3name = 'PREMIUM I';
      this.dr4name = 'PREMIUM II';

      this.dr1cost = 900;
      this.dr2cost = 700;
      this.dr3cost = 600;
      this.dr4cost = 550;
      this.bcr1cost = 1060;
      this.bcr2cost = 860;
      this.bcr3cost = 680;
      this.bcr4cost = 595;

      this.fatherFood1 = 7;
      this.fatherFood2 = 5;
      this.fatherFood3 = 3;
      this.fatherFood4 = 1;

      this.bdcare1 = 12;
      this.bdcare2 = 12;
      this.bdcare3 = 8;
      this.bdcare4 = 7;

    }
  }

  ngOnInit() {
  }

}
