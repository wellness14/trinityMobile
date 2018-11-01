import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from "../data.service";
import { Consult } from "../consult";


@Component({
  selector: 'app-detail-consult',
  templateUrl: './detail-consult.component.html',
  styleUrls: ['./detail-consult.component.scss']
})


export class DetailConsultComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public _data: DataService) {
    window.scrollTo(0, 0);
    this.route.params.subscribe(res => this._data.detail.CC_SEQ = res.seq);
  }

  ngOnInit() {
    this._data.detailConsult(this._data.detail.CC_SEQ).then(res => {
      this._data.detail = res;
    });
  }

  /**
   * 상담삭제
   */
  deleteConsult() {
    var pw = prompt('비밀번호를 입력해주세요.');

    if (pw != "") {
      if (pw == this._data.detail.CC_PASSWORD) {
        this._data.deleteConsult(this._data.detail.CC_SEQ).then(res => {
          alert('삭제되었습니다.');
          this.router.navigate(['/onlineConsult']);
        });    
      } else {
        alert('비밀번호를 다릅니다. 다시 입력해주세요.');
      }
    } else if (pw == null || pw == "") {
      alert('비밀번호를 입력해주세요.');
    }
  }

  /**
   * 답변내용 등록
   */
  registReply(replyCont) {
    this._data.detail.CC_REPLY_CONTENT = replyCont;
    this._data.detail.CC_REPLY_STATE = true;
    
    this._data.registReply(this._data.detail).then(res => {
      alert('답변이 등록되었습니다.');
    });

  }



  /**
   * 패스워드 확인 후 링크이동
   */
  pwCheck() {
    var pw = prompt('비밀번호를 입력해주세요.');

    if (pw != "") {
      // 1. 입력받은 비밀번호와 시퀀스로 비밀번호 대조 후 맞으면 링크이동.
      if (pw == this._data.detail.CC_PASSWORD) {
        this.router.navigate(['/modifyConsult/' + this._data.detail.CC_SEQ]);
      } else {
        alert('비밀번호를 다릅니다. 다시 입력해주세요.');
      }
    } else if (pw == null || pw == "") {
      alert('비밀번호를 입력해주세요.');
    }
  }

  

}
