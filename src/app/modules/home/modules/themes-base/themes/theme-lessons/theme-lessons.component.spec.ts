import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLessonsComponent } from './theme-lessons.component';

describe('ThemeLessonsComponent', () => {
  let component: ThemeLessonsComponent;
  let fixture: ComponentFixture<ThemeLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
