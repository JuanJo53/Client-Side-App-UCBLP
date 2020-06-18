import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDefaultModuleComponent } from './edit-default-module.component';

describe('EditDefaultModuleComponent', () => {
  let component: EditDefaultModuleComponent;
  let fixture: ComponentFixture<EditDefaultModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDefaultModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDefaultModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
