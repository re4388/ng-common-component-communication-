import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-child',
  templateUrl: './child-to-parent-child.component.html',
  styleUrls: ['./child-to-parent-child.component.css']
})
export class ChildToParentChildComponent implements OnInit {
  constructor() { }

  @Input() name: string;
  /* an instance from EventEmitter to output */
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean): void{
    this.didVote = true;
    // when user click vote, we emit to parent component
    this.voted.emit(agreed);
  }


  ngOnInit(): void {
  }

}
