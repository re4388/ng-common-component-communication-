import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-parent-to-child-child',
  templateUrl: './parent-to-child-child.component.html',
  styleUrls: ['./parent-to-child-child.component.css']
})
export class ParentToChildChildComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
