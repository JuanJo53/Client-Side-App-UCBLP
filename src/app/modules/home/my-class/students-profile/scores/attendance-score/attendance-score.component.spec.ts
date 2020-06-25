import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceScoreComponent } from './attendance-score.component';

describe('AttendanceScoreComponent', () => {
  let component: AttendanceScoreComponent;
  let fixture: ComponentFixture<AttendanceScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
