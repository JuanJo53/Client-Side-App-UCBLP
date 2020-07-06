import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentsBaseComponent } from './assessments-base.component';

describe('AssessmentsBaseComponent', () => {
  let component: AssessmentsBaseComponent;
  let fixture: ComponentFixture<AssessmentsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
