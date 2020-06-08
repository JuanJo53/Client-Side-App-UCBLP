import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomModuleComponent } from './edit-custom-module.component';

describe('EditCustomModuleComponent', () => {
  let component: EditCustomModuleComponent;
  let fixture: ComponentFixture<EditCustomModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCustomModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
