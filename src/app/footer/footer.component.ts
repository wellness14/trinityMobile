import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  centerLocation = this._data.centerLocation;
  addr: string = '';
  tel: string = '';
  fax: string = '';
  director: string = '';
  license: string = '';

  constructor(public _data: DataService) {
    if (this._data.centerLocation == 'cd') {
      this.addr = '서울 강남구 학동로 101길 15 청담아시아빌딩 2층';
      this.tel = '02-541-5617';
      this.fax = '02-541-5674';
      this.license = '사업자등록 437-85-00683';
      this.director = '최남선';
    }else if(this._data.centerLocation == 'ss') {
      this.addr = '서울 강남구 삼성로 548 시모소 타워 2,3,4 층';
      this.tel = '02-508-0013';
      this.fax = '0504-138-0013';
      this.license = '사업자등록 233-85-02207';
      this.director = '최남선';
    }
  }

  ngOnInit() {
    
  }

}
