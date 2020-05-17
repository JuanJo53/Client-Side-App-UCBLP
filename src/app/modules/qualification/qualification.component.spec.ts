import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationComponent } from './qualification.component';

describe('QualificationComponent', () => {
  let component: QualificationComponent;
  let fixture: ComponentFixture<QualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
