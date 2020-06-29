import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersScoreComponent } from './others-score.component';

describe('OthersScoreComponent', () => {
  let component: OthersScoreComponent;
  let fixture: ComponentFixture<OthersScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
