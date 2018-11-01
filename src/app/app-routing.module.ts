import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { OnlineConsultComponent } from "./online-consult/online-consult.component";
import { RequestConsultComponent } from "./request-consult/request-consult.component";
import { DetailConsultComponent } from "./detail-consult/detail-consult.component";
import { ModifyConsultComponent } from "./modify-consult/modify-consult.component";
import { MainComponent } from "./main/main.component";
import { GuideComponent } from "./guide/guide.component";
import { ServiceComponent } from "./service/service.component";
import { CenterComponent } from "./center/center.component";
import { Router, UrlSegment, UrlMatchResult } from "@angular/router";
import { IntroPageComponent } from "./intro-page/intro-page.component";
import { PriceComponent } from './price/price.component';


// export function MyAwesomeMatcher ( url: UrlSegment[] ): UrlMatchResult {

//   if (url.length === 0) {
//     return null;
//   }

//   const reg = /^(awesome-path)$/;
//   const param = url[ 0 ].toString();
 
//   if (param.match( reg )) {
//     // myValue: "awesome-path"
//     return ({ consumed: url, posParams: { myValue: url[ 0 ] } });
//   }

//   return null;

// }

const routes: Routes = [
  // {
  //   path: '',
  //   component: IntroPageComponent
  // },
  {
    path: '',
    component: MainComponent
  },
  // {
  //   path: 'ss',
  //   component: MainComponent
  // },
  // {
  //   path: 'cd',
  //   component: MainComponent
  // },
  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    // path: 'about/:id',
    path: 'center',
    component: CenterComponent
  },
  {
    path: 'onlineConsult',
    component: OnlineConsultComponent
  },
  {
    path: 'requestConsult',
    component: RequestConsultComponent
  },
  {
    path: 'detailConsult/:seq',
    component: DetailConsultComponent
  },
  {
    path: 'modifyConsult/:seq',
    component: ModifyConsultComponent
  },
  {
    path: 'guide',
    component: GuideComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'price',
    component: PriceComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
