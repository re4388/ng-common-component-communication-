import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setter-child',
  templateUrl: './setter-child.component.html',
  styleUrls: ['./setter-child.component.css']
})
export class SetterChildComponent implements OnInit {
  /* this private variable only used below logic to set the parent passed-in variable */
  private _name = '';

  /* use @Input decorator */
  /* use set to make this method a setter */
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || `< no name set>`;
  }

  get name(): string {
    return this._name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
