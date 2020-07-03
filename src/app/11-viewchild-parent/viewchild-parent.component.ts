import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { ViewchildChildComponent } from '../12-viewchild-child/viewchild-child.component';


@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.css']
})
export class ViewchildParentComponent implements AfterViewInit {

  constructor() { }

  // inject the child component into the parent as a ViewChild
  @ViewChild(ViewchildChildComponent)

  // then assign to private variable
  private timerComponent: ViewchildChildComponent;

  seconds() { return 0; }

  /* we need to redefine `seconds()` to get from the `CountdownTimerComponent.seconds`
  but need to use setTimeout to wait a tick to update the parent component in next cycle*/
  ngAfterViewInit(): void{
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  /* we rebind method from injected component to current component */
  start(): void{ this.timerComponent.start(); }
  stop(): void{ this.timerComponent.stop(); }


  ngOnInit(): void {
  }

}
