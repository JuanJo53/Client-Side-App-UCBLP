import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumsBaseComponent } from './forums-base.component';

describe('ForumsBaseComponent', () => {
  let component: ForumsBaseComponent;
  let fixture: ComponentFixture<ForumsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
