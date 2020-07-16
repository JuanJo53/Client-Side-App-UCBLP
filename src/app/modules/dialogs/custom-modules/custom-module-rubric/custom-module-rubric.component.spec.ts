import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModuleRubricComponent } from './custom-module-rubric.component';

describe('CustomModuleRubricComponent', () => {
  let component: CustomModuleRubricComponent;
  let fixture: ComponentFixture<CustomModuleRubricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomModuleRubricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomModuleRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
