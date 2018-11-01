import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

  // centerLocation: string = '';

  center1: string = '';
  center2: string = '';
  center3: string = '';
  center4: string = '';
  center5: string = '';
  
  infantroomExplain: string = '';
  motherRoomItem1: string = '';
  motherRoomItem4: string = '';
  motherRoomItem5: string = '';
  // 삼성
  center1ss: string = 'assets/img/center1ss.jpg';

  constructor(private router: Router, public _data: DataService) {
    this.router.navigate(['center']).then(() => { window.scrollTo(0, 0) });
    if (this._data.centerLocation == 'cd') {
      
      this.center1 = 'assets/img/center1.jpg';
      this.center2 = 'assets/img/center2.jpg';
      this.center3 = 'assets/img/center3.jpg';
      this.center4 = 'assets/img/center4.jpg';
      this.center5 = 'assets/img/center5.jpg';
      this.motherRoomItem1 = '산모실과 신생아실 사이 이동하는 동선이 외부 공간과 분리';
      this.motherRoomItem4 = '미진좌욕기';
      this.motherRoomItem5 = '덕시아나 매트리스';
      this.infantroomExplain = '분리된 소규모 신생아실 2실 운영(6인실, 9실)';
    }else if(this._data.centerLocation == 'ss') {
      this.center1 = 'assets/img/ss/center1.jpg';
      this.center2 = 'assets/img/ss/center2.jpg';
      this.center3 = 'assets/img/ss/center3.jpg';
      this.center4 = 'assets/img/ss/center4.jpg';
      this.center5 = 'assets/img/center5.jpg';
      this.infantroomExplain = '층별로 신생아실이 있으며 각각 신생아 격리실을 갖추고 있습니다.';
      this.motherRoomItem1 = '침실과 응접실이 분리되어있어 산모님과 가족분의 편안한 휴식을 제공';
      this.motherRoomItem4 = '좌욕기';
      this.motherRoomItem5 = '에르고 슬립 침대';
    }
  }

  ngOnInit() {
  }

}
