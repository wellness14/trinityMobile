import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyConsultComponent } from './modify-consult.component';

describe('ModifyConsultComponent', () => {
  let component: ModifyConsultComponent;
  let fixture: ComponentFixture<ModifyConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
