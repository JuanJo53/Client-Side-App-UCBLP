import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsProfileComponent } from './students-profile.component';

describe('StudentsProfileComponent', () => {
  let component: StudentsProfileComponent;
  let fixture: ComponentFixture<StudentsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
