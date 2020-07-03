import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onchange-parent',
  templateUrl: './onchange-parent.component.html',
  styleUrls: ['./onchange-parent.component.css']
})
export class OnchangeParentComponent implements OnInit {
  constructor() { }

  major = 1;
  minor = 23;


  addMinor(): void {
    this.minor++;
  }

  addMajor(): void {
    this.major++;
    this.minor = 0;
  }



  ngOnInit(): void {}

}
