import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineConsultComponent } from './online-consult.component';

describe('OnlineConsultComponent', () => {
  let component: OnlineConsultComponent;
  let fixture: ComponentFixture<OnlineConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
