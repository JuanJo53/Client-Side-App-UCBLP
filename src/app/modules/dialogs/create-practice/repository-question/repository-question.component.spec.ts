import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryQuestionComponent } from './repository-question.component';

describe('RepositoryQuestionComponent', () => {
  let component: RepositoryQuestionComponent;
  let fixture: ComponentFixture<RepositoryQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
