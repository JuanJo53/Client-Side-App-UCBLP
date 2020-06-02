import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditForumComponent } from './edit-forum.component';

describe('EditForumComponent', () => {
  let component: EditForumComponent;
  let fixture: ComponentFixture<EditForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
