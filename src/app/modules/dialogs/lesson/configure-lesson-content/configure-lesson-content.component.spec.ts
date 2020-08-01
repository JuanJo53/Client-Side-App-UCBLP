import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureLessonContentComponent } from './configure-lesson-content.component';

describe('ConfigureLessonContentComponent', () => {
  let component: ConfigureLessonContentComponent;
  let fixture: ComponentFixture<ConfigureLessonContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureLessonContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureLessonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
