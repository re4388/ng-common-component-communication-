import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-parent',
  templateUrl: './child-to-parent-parent.component.html',
  styleUrls: ['./child-to-parent-parent.component.css']
})
export class ChildToParentParentComponent implements OnInit {

  constructor() { }

  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean): void {
    agreed ? this.agreed++ : this.disagreed++;
  }

  ngOnInit(): void {
  }

}
