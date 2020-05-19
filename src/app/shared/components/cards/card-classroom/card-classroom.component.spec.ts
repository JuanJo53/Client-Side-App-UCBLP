import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClassroomComponent } from './card-classroom.component';

describe('CardClassroomComponent', () => {
  let component: CardClassroomComponent;
  let fixture: ComponentFixture<CardClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
