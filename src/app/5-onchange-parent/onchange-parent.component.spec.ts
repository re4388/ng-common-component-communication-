import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangeParentComponent } from './onchange-parent.component';

describe('OnchangeParentComponent', () => {
  let component: OnchangeParentComponent;
  let fixture: ComponentFixture<OnchangeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnchangeParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnchangeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
