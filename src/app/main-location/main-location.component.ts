import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-main-location',
  templateUrl: './main-location.component.html',
  styleUrls: ['./main-location.component.scss']
})
export class MainLocationComponent implements OnInit {
  
  
  
  constructor(public _data:DataService) {
    
  }

  ngOnInit() {
    
  }

}
