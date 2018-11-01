import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGreetComponent } from './main-greet.component';

describe('MainGreetComponent', () => {
  let component: MainGreetComponent;
  let fixture: ComponentFixture<MainGreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
