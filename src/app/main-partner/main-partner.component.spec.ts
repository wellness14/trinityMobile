import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPartnerComponent } from './main-partner.component';

describe('MainPartnerComponent', () => {
  let component: MainPartnerComponent;
  let fixture: ComponentFixture<MainPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
