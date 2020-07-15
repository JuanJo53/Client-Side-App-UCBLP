import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentScoreComponent } from './update-student-score.component';

describe('UpdateStudentScoreComponent', () => {
  let component: UpdateStudentScoreComponent;
  let fixture: ComponentFixture<UpdateStudentScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStudentScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
