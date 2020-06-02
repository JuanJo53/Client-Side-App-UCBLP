import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureLessonComponent } from './configure-lesson.component';

describe('ConfigureLessonComponent', () => {
  let component: ConfigureLessonComponent;
  let fixture: ComponentFixture<ConfigureLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
