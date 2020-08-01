import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePracticeComponent } from './create-practice.component';

describe('CreatePracticeComponent', () => {
  let component: CreatePracticeComponent;
  let fixture: ComponentFixture<CreatePracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
