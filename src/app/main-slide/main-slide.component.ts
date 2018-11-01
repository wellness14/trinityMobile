import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-main-slide',
  templateUrl: './main-slide.component.html',
  styleUrls: ['./main-slide.component.scss']
})
export class MainSlideComponent implements OnInit {

  centerLocation : string = '';
  constructor(public _data: DataService) { 
    if (this._data.centerLocation == 'cd') {
      this.centerLocation = 'Cheongdam';
    } else if (this._data.centerLocation == 'ss') {
      this.centerLocation = 'Samsung';
    }
  }

  ngOnInit() {
  }

}
