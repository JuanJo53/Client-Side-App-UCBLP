import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesBaseComponent } from './themes-base.component';

describe('ThemesBaseComponent', () => {
  let component: ThemesBaseComponent;
  let fixture: ComponentFixture<ThemesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemesBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
