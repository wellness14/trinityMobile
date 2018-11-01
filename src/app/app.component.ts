import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../app/data.service";
import { NgsRevealConfig } from 'ng-scrollreveal/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router, public _data: DataService, public route: ActivatedRoute, config: NgsRevealConfig) { 
    // config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    config.easing = 'cubic-bezier(.21,.85,.7,1)';
    config.opacity = 0;
    config.scale = 0;
    config.mobile = true;
    config.origin = 'bottom';
    config.distance = '30px';
    config.duration = 2000;
    // config.useDelay = 'always';

  }
  
}
