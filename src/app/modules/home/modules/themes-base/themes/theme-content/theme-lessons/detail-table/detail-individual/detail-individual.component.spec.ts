import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIndividualComponent } from './detail-individual.component';

describe('DetailIndividualComponent', () => {
  let component: DetailIndividualComponent;
  let fixture: ComponentFixture<DetailIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
