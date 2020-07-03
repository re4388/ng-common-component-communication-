import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChildLocalParentComponent } from './parent-to-child-local-parent.component';

describe('ParentToChildLocalParentComponent', () => {
  let component: ParentToChildLocalParentComponent;
  let fixture: ComponentFixture<ParentToChildLocalParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentToChildLocalParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentToChildLocalParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
