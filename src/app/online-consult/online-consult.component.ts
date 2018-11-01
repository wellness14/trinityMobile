import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-online-consult',
  templateUrl: './online-consult.component.html',
  styleUrls: ['./online-consult.component.scss']
})


export class OnlineConsultComponent implements OnInit {
  
  pageCnt:number;
  nowPage:number;
  closeSrc:string = "assets/img/cross.png";
  centerLocation: string = this._data.centerLocation;
  
  // LifeCycle hooks _ 1
  constructor(public _data: DataService, public router: Router) {
    // this.router.navigate['onlineConsult'].then(() => { window.scrollTo(0, 0) });
  }

  // LifeCycle hooks _ 2
  ngOnChanges() {
    // 부모->자식 컴포넌트의 입력프로퍼티로 바인딩한 값이 초기화 또는 변경되었을때 실행. @Input 존재하는 경우 최소1회 호출 후 참조값 변경시마다 호출.

  }
  // LifeCycle hooks _ 3
  ngOnInit() {
    this._data.getPaging(0, this._data.oiCode).then((res:any )=> {
      this.pageCnt = res.pageCnt;
      this.nowPage = 1;
      this._data.list = res.queryResult;
    });
  }
  // LifeCycle hooks _ 4
  ngDoCHeck() {
    
  }
  // LifeCycle hooks _ 4-1
  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    
  }
  // LifeCycle hooks _ 4-2
  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    
  }
  // LifeCycle hooks _ 4-3
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }
  // LifeCycle hooks _ 4-4
  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
  }
  // LifeCycle hooks _ 5
  ngOnDestroy() {

  }
  



  /**
   * 다음페이지
   */
  nextPage() {
    this.nowPage++;
    if (this.nowPage > this.pageCnt) {
      alert('마지막 페이지입니다.');
      this.nowPage--;
      return false;
    }
    // this.callPage(this._data.keyword);
    this.callPage();
  }
  


  /**
   * 이전페이지
   */
  prevPage() {
    this.nowPage--;
    if (this.nowPage == 0) {
      alert('처음 페이지입니다.');
      this.nowPage++;
      return false;
    }
    // this.callPage(this._data.keyword);
    this.callPage();
  }



  /**
   * 해당페이지 리스트 콜
   */
  // callPage(keyword) {
  callPage() {
    this._data.getPaging(this.nowPage, this._data.oiCode).then((res: any) => {
      this.pageCnt = res.pageCnt;
      this._data.list = res.queryResult;
    });
  }



  /**
   * 패스워드 확인 후 링크이동
   */
  pwCheck(data) {
    var pw = prompt('비밀번호를 입력해주세요.');


    if (pw != "") {
      // 1. 입력받은 비밀번호와 시퀀스로 비밀번호 대조 후 맞으면 링크이동.
      if (pw == data.CC_PASSWORD) {
        this.router.navigate(['/detailConsult/'+data.CC_SEQ]);
      }else{
        alert('비밀번호를 다릅니다. 다시 입력해주세요.');
      }
    }else if(pw == null || pw == "") {
      alert('비밀번호를 입력해주세요.');
    }
  }



}
