import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureThemeComponent } from './configure-theme.component';

describe('ConfigureThemeComponent', () => {
  let component: ConfigureThemeComponent;
  let fixture: ComponentFixture<ConfigureThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
