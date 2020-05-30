import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeQuestionComponent } from './type-question.component';

describe('TypeQuestionComponent', () => {
  let component: TypeQuestionComponent;
  let fixture: ComponentFixture<TypeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
