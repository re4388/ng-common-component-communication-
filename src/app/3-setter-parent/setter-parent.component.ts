import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setter-parent',
  templateUrl: './setter-parent.component.html',
  styleUrls: ['./setter-parent.component.css']
})
export class SetterParentComponent implements OnInit {

  /* data source */
  names = ['Dr IQ', '   ', '  Bombasto  '];


  constructor() { }
  ngOnInit(): void {
  }

}
