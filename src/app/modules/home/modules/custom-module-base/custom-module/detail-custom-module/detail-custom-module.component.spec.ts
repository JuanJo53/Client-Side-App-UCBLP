import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCustomModuleComponent } from './detail-custom-module.component';

describe('DetailCustomModuleComponent', () => {
  let component: DetailCustomModuleComponent;
  let fixture: ComponentFixture<DetailCustomModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCustomModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCustomModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
