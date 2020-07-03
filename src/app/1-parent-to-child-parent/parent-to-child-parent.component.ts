import { Component, OnInit } from '@angular/core';
import { HEROS } from '../hero';

@Component({
  selector: 'app-parent-to-child-parent',
  templateUrl: './parent-to-child-parent.component.html',
  styleUrls: ['./parent-to-child-parent.component.css']
})
export class ParentToChildParentComponent implements OnInit {
  heroes = HEROS;
  constructor() { }

  ngOnInit(): void {
  }

}

