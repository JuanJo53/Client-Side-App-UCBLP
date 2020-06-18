import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomModuleComponent } from './add-custom-module.component';

describe('AddCustomModuleComponent', () => {
  let component: AddCustomModuleComponent;
  let fixture: ComponentFixture<AddCustomModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
