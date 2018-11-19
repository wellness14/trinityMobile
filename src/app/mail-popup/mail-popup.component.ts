import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

// Metadata
@Component({
  selector: 'app-mail-popup',
  templateUrl: './mail-popup.component.html',
  styleUrls: ['./mail-popup.component.scss']
})
export class MailPopupComponent implements OnInit {

  hide:boolean;
                          //프라이빗 팝업 이미지 경로, 파일명
  private_class: string = "assets/img/private_class_11_m.jpg";
  
//프라이빗 팝업  true 숨김 false 나타냄
  constructor(public _data: DataService) { 
    if (this._data.centerLocation == 'ss') {
      this.hide = true;
    }else if(this._data.centerLocation == 'cd') {
      this.hide = true;
    }
  }

  ngOnInit() {
  }

  closePopup() {
    this.hide = true;
  }

}
