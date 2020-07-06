import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualAssessmentComponent } from './individual-assessment.component';

describe('IndividualAssessmentComponent', () => {
  let component: IndividualAssessmentComponent;
  let fixture: ComponentFixture<IndividualAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
