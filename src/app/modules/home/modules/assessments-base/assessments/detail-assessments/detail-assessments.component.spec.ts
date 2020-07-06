import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAssessmentsComponent } from './detail-assessments.component';

describe('DetailAssessmentsComponent', () => {
  let component: DetailAssessmentsComponent;
  let fixture: ComponentFixture<DetailAssessmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAssessmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
