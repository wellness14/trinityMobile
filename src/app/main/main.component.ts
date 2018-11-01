import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public _data: DataService, public route: ActivatedRoute) {
    // var a = window.location.href;
    // var b = a.split('/');
    // var b_length = b.length - 1;

    // this._data.centerLocation = b[b_length];
    // console.log(this._data.centerLocation);

    // if (this._data.centerLocation == 'cd') {
    //   this._data.consult.OI_CODE = 'OI00000119';
    //   this._data.oiCode = 'OI00000119';
    // } else if (this._data.centerLocation == 'ss') {
    //   this._data.consult.OI_CODE = 'OI00000121';
    //   this._data.oiCode = 'OI00000121';
    // }
  }

  ngOnInit() {
    console.log(window.location.href);
  }

}
