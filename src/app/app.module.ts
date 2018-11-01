import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from "@angular/http";
import { AgmCoreModule } from "@agm/core";

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OnlineConsultComponent } from './online-consult/online-consult.component';
import { RequestConsultComponent } from './request-consult/request-consult.component';
import { DetailConsultComponent } from './detail-consult/detail-consult.component';
import { ModifyConsultComponent } from './modify-consult/modify-consult.component';
import { MainComponent } from './main/main.component';
import { MainSlideComponent } from './main-slide/main-slide.component';
import { MainIntroComponent } from './main-intro/main-intro.component';
import { MainGreetComponent } from './main-greet/main-greet.component';
import { MainFeatureComponent } from './main-feature/main-feature.component';
import { MainServiceComponent } from './main-service/main-service.component';
import { MainPartnerComponent } from './main-partner/main-partner.component';
import { MainLocationComponent } from './main-location/main-location.component';
import { GuideComponent } from './guide/guide.component';
import { ServiceComponent } from './service/service.component';
import { CenterComponent } from './center/center.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { RoundPipe } from "./round.pipe";


// Service
import { DataService } from "./data.service";

// third party
import { SwiperModule } from "../../node_modules/angular2-useful-swiper";
import { NgsRevealModule } from "ng-scrollreveal";
import { MainExpertComponent } from './main-expert/main-expert.component';
import { MailPopupComponent } from './mail-popup/mail-popup.component';
import { PriceComponent } from './price/price.component';


/* 
NgModule Decorator :
Component Decorator가 class를 Component라고 명시하듯
NgModule Decorator는 class를 Module라고 명시해줌.
*/
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    OnlineConsultComponent,
    RequestConsultComponent,
    DetailConsultComponent,
    ModifyConsultComponent,
    MainComponent,
    MainSlideComponent,
    MainIntroComponent,
    MainGreetComponent,
    MainFeatureComponent,
    MainServiceComponent,
    MainPartnerComponent,
    MainLocationComponent,
    GuideComponent,
    ServiceComponent,
    CenterComponent,
    IntroPageComponent,
    RoundPipe,
    MainExpertComponent,
    MailPopupComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    NgsRevealModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyARV0vTU5xSiMB3P6-ae3pCP1CjOdcNG9c'
    }),
    SwiperModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
