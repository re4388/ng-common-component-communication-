import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangeChildComponent } from './onchange-child.component';

describe('OnchangeChildComponent', () => {
  let component: OnchangeChildComponent;
  let fixture: ComponentFixture<OnchangeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnchangeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnchangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
