import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-main-greet',
  templateUrl: './main-greet.component.html',
  styleUrls: ['./main-greet.component.scss']
})
export class MainGreetComponent implements OnInit {

  greet:string = "";

  constructor(public _data: DataService) {
    if (this._data.centerLocation == 'cd') {
      this.greet = "assets/img/GREET.jpg";
    }else if(this._data.centerLocation == 'ss') {
      this.greet = "assets/img/ss/GREET.jpg";
    }
  }

  ngOnInit() {
  }

}
