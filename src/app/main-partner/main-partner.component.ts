import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-main-partner',
  templateUrl: './main-partner.component.html',
  styleUrls: ['./main-partner.component.scss']
})
export class MainPartnerComponent implements OnInit {

  partner1: string = '';
  partner2: string = 'assets/img/partner2.jpg';
  partner3: string = 'assets/img/partner3.jpg';
  partner4: string = 'assets/img/partner4.jpg';
  partner5: string = 'assets/img/partner5.jpg';
  partner6: string = 'assets/img/soybio.png';
  partner7: string = 'assets/img/partner7.jpg';
  partner8: string = 'assets/img/yeon_logo.jpg';
  partner9: string = 'assets/img/pas_logo.jpg';

  milk: string = '';
  
  constructor(public _data: DataService) { 
    if (this._data.centerLocation == 'cd') {
      this.milk = 'http://company.namyangi.com/';
      this.partner1 = 'assets/img/partner1.jpg';
    } else if (this._data.centerLocation == 'ss') {
      this.milk = 'http://www.pasteur.co.kr/product/product.asp?g_code=AA';
      this.partner1 = 'assets/img/pas_logo.jpg';
    }
  }

  ngOnInit() {
  }

}
