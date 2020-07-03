import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChildLocalChildComponent } from './parent-to-child-local-child.component';

describe('ParentToChildLocalChildComponent', () => {
  let component: ParentToChildLocalChildComponent;
  let fixture: ComponentFixture<ParentToChildLocalChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentToChildLocalChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentToChildLocalChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
