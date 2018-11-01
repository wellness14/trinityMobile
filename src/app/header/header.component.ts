import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes,query, stagger, group } from '@angular/animations';
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
  // animations: [
  //   // define animation here.
  //   trigger('sideNav',[
  //     state('hide', style({
  //       transform: 'translateX(-200px)'
  //     })),
  //     state('show', style({
  //       transform: 'translateX(0)'
  //     })),
  //     transition('hide => show', animate('.3s cubic-bezier(0.165, 0.84, 0.44, 1)')),
  //     transition('show => hide', animate('.3s cubic-bezier(0.165, 0.84, 0.44, 1)'))
  //   ])
  // ]
})
export class HeaderComponent implements OnInit {

  trinityLogo = "assets/img/logo_m.png";
  trinityLogoSS = "assets/img/logo_m_ss.png";
  navLogo = "assets/img/logo_nav.png";
  closeBtn = "assets/img/cross.png";
  consultBtnSrc = "assets/img/consult.png";
  hamburgerSrc = "assets/img/hamburger.png";

  homeSrc = "assets/img/home_icon.png";
  centerSrc = "assets/img/center_icon.png";
  serviceSrc = "assets/img/service_icon.png";
  guideSrc = "assets/img/guide_icon.png";

  centerLocation = this._data.centerLocation;  

  show = false;
  consultShow = false;
  hide = true;
  
  tel:string = '';
  phone: string = "assets/img/phone.png";
  center: string = '';
  center_link: string = "";
  event_category: string = "";
  is_ss: boolean = true;

  constructor(public _data: DataService, public route: ActivatedRoute) {
    if (this._data.centerLocation == 'ss') {
      this.hide = false;
      this.tel = "tel:02-508-0013";
      this.center = "청담점";
      this.center_link = "http://trinitycare.co.kr/cd-m/";
      this.event_category = "ss-to-cd";
      
    } else if (this._data.centerLocation == 'cd') {
      this.tel = "tel:02-541-5617";
      this.center = "삼성점";
      this.center_link = "http://trinitycare.co.kr/ss-m/";
      this.event_category = "cd-to-ss";
      this.is_ss = false;
    }
  }

  ngOnInit() {
  }

  // nav show / hide
  toggle() {
    this.show = !this.show;
  }

  // consult show / hide
  consultToggle() {
    this.consultShow = !this.consultShow;
  }
  

}
