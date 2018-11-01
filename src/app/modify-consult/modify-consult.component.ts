import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Consult } from "../consult";
import { DataService } from "../data.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-modify-consult',
  templateUrl: './modify-consult.component.html',
  styleUrls: ['./modify-consult.component.scss']
})


export class ModifyConsultComponent implements OnInit {

  constructor(private http: HttpClient, public _data: DataService, private router: Router, private route: ActivatedRoute) { 
    window.scrollTo(0, 0);
    this.route.params.subscribe(res => this._data.detail.CC_SEQ = res.seq);
  }

  ngOnInit() {
    this._data.detailConsult(this._data.detail.CC_SEQ).then(
      res => {
        this._data.detail = res;
      }
    );
  }

  
  
  /**
   * 상담삭제
   */
  deleteConsult() {
    this._data.deleteConsult(this._data.detail.CC_SEQ).then(res => {
      alert('삭제되었습니다.');
      this.router.navigate(['/onlineConsult']);
    });
  }

  
  
  /**
   * 상담내용 수정
   */
  modifyConsult() {
    this._data.modifyConsult(this._data.detail).then(
      res => {
        alert('수정되었습니다.');
        this.router.navigate(['/onlineConsult']);
      }
    )
  }
  
  


}
