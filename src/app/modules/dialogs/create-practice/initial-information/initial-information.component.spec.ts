import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialInformationComponent } from './initial-information.component';

describe('InitialInformationComponent', () => {
  let component: InitialInformationComponent;
  let fixture: ComponentFixture<InitialInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
