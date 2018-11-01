import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Consult } from "../consult";
import { DataService } from "../data.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-request-consult',
  templateUrl: './request-consult.component.html',
  styleUrls: ['./request-consult.component.scss']
})


export class RequestConsultComponent implements OnInit {
  


  phone:string = "assets/img/phone.png";
  tel:string = '';
  today = new Date();
  // nowDate = this.today.getFullYear()+"-"+(this.today.getMonth()+1)+"-"+this.today.getDate();

  // HttpClient를 컴포넌트에 주입
  constructor(private http: HttpClient, public _data: DataService, private router: Router) { 
    // this.router.navigate(['reqeustConsult']).then(() => { window.scrollTo(0, 0) });
    window.scrollTo(0, 0);
    if (this._data.centerLocation == 'ss') {
      this.tel = "tel:02-508-0013";
    } else if (this._data.centerLocation == 'cd') {
      this.tel = "tel:02-541-5617";
    }
  }

  ngOnInit() {
    this._data.consult.CC_PAGE_LOCK = true;
    this._data.consult.CC_PRIVATE_INFO_AGREE = false;
    // this._data.consult.CC_PN_DATE = this.today.toString();
  }


  // GA call event
  // clickLog(category, action) {
  //   gtag('event', action, {
  //     'event_category': category
  //   });
  // }  

  /**
  * 신규상담신청 
  */
  // POST
  createConsult() {
    this._data.createConsult().then(
      res => {
        alert('상담신청이 등록되었습니다.');
        this._data.consult = new Consult(); // data 초기화
        this.router.navigate(['']);
      }
    );
    // const result = this._data.createConsult();
    // console.log(result);
    


  }
  // GET
  // createConsult() {
  //   this._data.createConsult(this._data.consult, this._data.oiCode).then(
  //     res => {
  //       console.log('request ok');
  //       // alert('상담신청이 등록되었습니다.');
  //       // this._data.consult = new Consult(); // data 초기화
  //       this.router.navigate(['/onlineConsult']);
  //     }
  //   );
  // }



  // doGET() {
  //   this.http.get<Todo[]>(this.url, { observe: 'response' })
  //     // HttpClient.get 메소드는 제네릭 함수이므로 파라미터 타입을 설정해주어야 한다.
  //     // 서버에서 받은 데이터는 Object타입인데 this.todos 는 Todo[] 타입이라서 에러가 난 부분이므로 get<Todo[]> 로 타입  파라미터를 지정해준다.

  //     // 요청결과를 프로퍼티에 할당
  //     .subscribe(
  //     // 요청 성공 처리 콜백함수 (Observer의 next 함수)
  //     res => {
  //       console.log(res);
  //       console.log(res.headers);
  //       console.log(res.status);
  //       this.todos = res.body;
  //     },
  //     // 요청 실패 처리 콜백함수(Observer의 error 함수)
  //     (err: HttpErrorResponse) => {
  //       if (err.error instanceof Error) {
  //         // 클라이언트 또는 네트워크 에러
  //         console.log('Client-side error : ${err.err.message}');
  //       } else {
  //         // 백엔드 실패 상태 코드 응답
  //         console.log('Server-side error : ${err.status}');
  //       }
  //     }
  //   );
  // }

 































  // getTodos() {
  //   this.http.get<Todo[]>(this.url)
  //     .subscribe(todos => this.todos = todos);
  // }

  // 새로운 todo를 생성한다.
  // addTodo() {
  //   console.log('addTodo in');
  //   // if(!this.content){ return; }
  //   console.log('addTodo in2');
  //   // 서버로 전송할 요청 페이로드
  //   // id는 json-server에 의해 자동 생성된다.
  //   const payload = { content: this.content, complete: false };

  //   this.http.post(this.url, payload)
  //     // .subscribe(() => this.getTodos());

  //   this.content = "";

  // }














  // doGET() {
  //   console.log('doGET');
  //   let url = this.apiRoot;
  //   var result = "";

  //   let search = new URLSearchParams();
  //   search.set("foo","moo");
  //   search.set("limit","25");

  //   // this.http.get(url, {search}).subscribe(
  //   //   result => console.log(result.text())
  //   // );

  //   // this.http.post(url, {moo: "foo", goo: "loo"}).subscribe(res => console.log(res.json()));
  //   // this.http.post(url, { moo: "foo", goo: "loo" });

  //   // this.http.get(url).subscribe(
  //   //   result => {
  //   //     this.result = result.json();
  //   //     console.log(this.result); // A 
  //   //   },
  //   //   error => {
  //   //     console.log(error);
  //   //   }
  //   // );
  //   // console.log(this.members); // B 

  // }

  // doPOST() {
  //   // XMLHttpRequest 객체 생성
  //   var xhr = new XMLHttpRequest();
  //   // 비동기 방식으로 Request를 오픈
  //   xhr.open('GET', 'api/todos');
  //   // Request를 전송
  //   xhr.send();



  //   console.log('doPOST');
  //   // let url = this.apiRoot;
  //   // let search = new URLSearchParams();
  //   // search.set("foo", "moo");
  //   // search.set("limit", "25");

  //   // this.http.post(url).subscribe(
  //   //   result => {
  //   //     this.result = result.text(),
  //   //     console.log(this.result)
  //   //   }
  //   // )
  // }

}
