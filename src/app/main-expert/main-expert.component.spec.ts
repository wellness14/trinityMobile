import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExpertComponent } from './main-expert.component';

describe('MainExpertComponent', () => {
  let component: MainExpertComponent;
  let fixture: ComponentFixture<MainExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
