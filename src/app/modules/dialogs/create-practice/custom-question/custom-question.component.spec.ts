import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomQuestionComponent } from './custom-question.component';

describe('CustomQuestionComponent', () => {
  let component: CustomQuestionComponent;
  let fixture: ComponentFixture<CustomQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
