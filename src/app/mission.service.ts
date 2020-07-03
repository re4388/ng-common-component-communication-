import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor() { }

  /* create two Subject as steam sources */
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  /* create Observable */
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  /* service to create mission string*/
  announceMission(mission: string): void {
    this.missionAnnouncedSource.next(mission);
  }

  /* service to create astronaut string*/
  confirmMission(astronaut: string): void {
    this.missionConfirmedSource.next(astronaut);
  }



}
