import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChildChildComponent } from './parent-to-child-child.component';

describe('ParentToChildChildComponent', () => {
  let component: ParentToChildChildComponent;
  let fixture: ComponentFixture<ParentToChildChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentToChildChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentToChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
