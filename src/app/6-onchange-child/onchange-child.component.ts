import { Component, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-onchange-child',
  templateUrl: './onchange-child.component.html',
  styleUrls: ['./onchange-child.component.css']
})
export class OnchangeChildComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  constructor() { }

  /* use ngOnChanges to detect all properties changes */
  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    const log: string[] = [];
    // loop thru all properties changes
    for (const propName of Object.keys(changes)) {
        // get changed property
        const changedProp = changes[propName];
        const currVal = JSON.stringify(changedProp.currentValue);
        if (changedProp.isFirstChange()) {
          log.push(`Initial value of ${propName} set to ${currVal}`);
        } else {
          const preVal = JSON.stringify(changedProp.previousValue);
          log.push(`${propName} changed from ${preVal} to ${currVal}`);
        }
    }
    this.changeLog.push(log.join(', '));
  }
}
