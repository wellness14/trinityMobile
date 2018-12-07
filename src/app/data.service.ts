import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Consult } from "./consult";
import { DomElementSchemaRegistry } from '@angular/compiler';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { $ } from 'protractor';
// import { ConsultList } from "./consultList";


@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();
  zoom: number = 17;

  // 청담점 모바일은 아래 정보 주석제거
  centerName: string = "청담점";
  centerLocation: string = "cd";
  oiCode: string = "OI00000119";
  lat:number = 37.521159;
  lng = 127.0574163;
  tel: string = "02-541-5617";

  // 삼성점 모바일은 아래 정보 주석제거
  //  centerName: string = "삼성점";
  //  centerLocation: string = "ss";
  //  oiCode: string = "OI00000121";
  //  lat = 37.5105759;
  //  lng = 127.05501;
  //  tel: string = "02-508-0013";



  constructor(private http: HttpClient) { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

  consult = new Consult();
  url = "http://api.trinitycare.co.kr/api/rest";
  urlAdmin = "http://api.trinitycare.co.kr/api/restAdmin";
  // url = "http://localhost/api/rest";
  // urlAdmin = "http://api.trinitycare.co.kr/api/restAdmin";
  
  detail = new Consult();
  list = new Array<any>();
  keyword: String = "";


  /**
   * 신규상담신청
   */
  // POST
  createConsult() {
    const payload = this.consult;
    payload.OI_CODE = this.oiCode;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url, payload, { headers }).toPromise();
    // return this.http.post(this.url, payload, { headers }).subscribe(res => {
    //   console.log(res);
    // });
  }
  // get
  // createConsult(payload,oiCode) {
  //   // console.log('payload='+payload.CC_AUTHOR);
  //   // console.log('oiCode='+oiCode);
  //   return this.http.get(this.url, { params: {payload,oiCode}}).toPromise();
  // }



  /**
   * 상담신청 리스트 가져오기
   */
  getConsult() {
    return this.http.get(this.url).toPromise();

    // this.http.get(this.url, { observe: 'response' })
    //   // HttpClient.get 메소드는 제네릭 함수이므로 파라미터 타입을 설정해주어야 한다.
    //   // 서버에서 받은 데이터는 Object타입인데 this.todos 는 Todo[] 타입이라서 에러가 난 부분이므로 get<Todo[]> 로 타입  파라미터를 지정해준다.

    //   // 요청결과를 프로퍼티에 할당
    //   .subscribe(
    //   // 요청 성공 처리 콜백함수 (Observer의 next 함수)
    //   res => {
    //     // console.log(res);
    //     // this.getResult = res.body;
    //     return res;
    //   }
    //   // ,
    //   // // 요청 실패 처리 콜백함수(Observer의 error 함수)
    //   // (err: HttpErrorResponse) => {
    //   //   if (err.error instanceof Error) {
    //   //     // 클라이언트 또는 네트워크 에러
    //   //     console.log('Client-side error : ${err.err.message}');
    //   //   } else {
    //   //     // 백엔드 실패 상태 코드 응답
    //   //     console.log('Server-side error : ${err.status}');
    //   //   }
    //   // }
    // ).;
    // return this.getResult;
  }  



  /**
   * 페이징 가져오기
   */
  getPaging(pageNum,oicode) {
    return this.http.get(this.url, {params: {pageNum,oicode}}).toPromise();
  }



  /**
   * 상담신청 삭제
   */
  deleteConsult(seq) {
    return this.http.delete(this.url, {params: {seq}}).toPromise();
  }



  /**
   * 상담신청내용 상세보기
   */
  detailConsult(seq) {
    return this.http.get<Consult>(this.url, {params: {seq}}).toPromise();

    // 파라미터 생성
    // const params = new HttpParams()
    //   .set('$seq', $seq);$
    
  }



  /**
   * 상담내용수정 . 
   *  - 수정메소드 실행하기전 비밀번호 확인 필요함.추후 진행.
   */
  modifyConsult(payload) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.put(this.url, payload, { headers }).toPromise();
  }



  /**
   * 답변내용등록
   */
  registReply(payload) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.put(this.urlAdmin, payload, { headers }).toPromise();
  }



  /**
   * 검색어로 리스트 검색
   */
  searchList(keyword) {
    return this.http.get(this.url + "?pageNum=0&keyword=" + keyword).toPromise();
  }

}
