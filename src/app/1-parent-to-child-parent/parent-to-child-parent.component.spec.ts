import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChildParentComponent } from './parent-to-child-parent.component';

describe('ParentToChildParentComponent', () => {
  let component: ParentToChildParentComponent;
  let fixture: ComponentFixture<ParentToChildParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentToChildParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentToChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
