import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesRubricComponent } from './modules-rubric.component';

describe('ModulesRubricComponent', () => {
  let component: ModulesRubricComponent;
  let fixture: ComponentFixture<ModulesRubricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesRubricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesRubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
