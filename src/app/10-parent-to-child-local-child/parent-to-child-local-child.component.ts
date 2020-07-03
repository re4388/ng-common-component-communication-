import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-local-child',
  templateUrl: './parent-to-child-local-child.component.html',
  styleUrls: ['./parent-to-child-local-child.component.css']
})
export class ParentToChildLocalChildComponent implements OnInit, OnDestroy {

  constructor() { }

  message = '';
  intervalId = 0;
  seconds = 11;

  clearTimer(): void {
    clearInterval(this.intervalId);
  }

  start(): void {
    this.countDown();
  }

  stop(): void {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown(): void{
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!!';
      } else {
        // reset
        if (this.seconds < 0) { this.seconds = 10; }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);


  }

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

}
