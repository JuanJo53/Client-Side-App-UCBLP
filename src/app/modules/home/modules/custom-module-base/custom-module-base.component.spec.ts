import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModuleBaseComponent } from './custom-module-base.component';

describe('CustomModuleBaseComponent', () => {
  let component: CustomModuleBaseComponent;
  let fixture: ComponentFixture<CustomModuleBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomModuleBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomModuleBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
