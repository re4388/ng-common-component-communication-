import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-service-parent',
  templateUrl: './service-parent.component.html',
  styleUrls: ['./service-parent.component.css'],
  providers: [MissionService]
})
export class ServiceParentComponent implements OnInit {
  /* we inject MissionService and subscribe mission confirm */
  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      // when mission confirmed, we send to history
      astronauts => {
        this.history.push(`${astronauts} confirmed the mission`);
      });
  }

  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = [
    'Fly to the moon!',
    'Fly to mars!',
    'Fly to Vegas!'];
  nextMission = 0;


  private keepRecord(mission: string): void {
    /* we also keep record to history */
    this.history.push(`Mission "${mission}" announced`);

    /* reset mission count */
    if (this.nextMission > this.missions.length) {
      this.nextMission = 0;
    }
  }

  announce(): void{
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);

    this.keepRecord(mission);


  }




  ngOnInit(): void {
  }

}
