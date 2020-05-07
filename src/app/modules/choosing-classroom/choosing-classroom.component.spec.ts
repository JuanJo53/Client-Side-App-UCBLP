import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosingClassroomComponent } from './choosing-classroom.component';

describe('ChoosingClassroomComponent', () => {
  let component: ChoosingClassroomComponent;
  let fixture: ComponentFixture<ChoosingClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosingClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosingClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
