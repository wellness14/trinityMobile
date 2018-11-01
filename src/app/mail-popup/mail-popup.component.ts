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

  private_class: string = "assets/img/private_class_11_m.jpg";
  

  constructor(public _data: DataService) { 
    if (this._data.centerLocation == 'ss') {
      this.hide = false;
    }else if(this._data.centerLocation == 'cd') {
      this.hide = false;
    }
  }

  ngOnInit() {
  }

  closePopup() {
    this.hide = true;
  }

}
