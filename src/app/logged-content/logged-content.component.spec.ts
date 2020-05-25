import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedContentComponent } from './logged-content.component';

describe('LoggedContentComponent', () => {
  let component: LoggedContentComponent;
  let fixture: ComponentFixture<LoggedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
