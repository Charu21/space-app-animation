import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../space.service';
import { Flight } from '../interfaces/flight';
import { SlideInOutAnimation } from '../_animations/animate'
import { trigger, style, transition, animate, group }
  from '@angular/animations';

@Component({
  selector: 'app-space-mission',
  templateUrl: './space-mission.component.html',
  animations: [SlideInOutAnimation],
  styleUrls: ['./space-mission.component.css']
})
export class SpaceMissionComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private spaceService: SpaceService) { }

  ngOnInit() {
    this.spaceService.getData().subscribe(response => {
      for (const d of (response as any)) {
        this.flights.push({
          flight_number: d.flight_number,
          mission_name: d.mission_name,
          launch_year: d.launch_year,
          rocket_name: d.rocket.rocket_name,
          image_link: d.links.mission_patch,
          flight_state: 'out'
        });
      }
    });
  }

  toggleShowImage(flight: Flight) {
    console.log(flight.flight_state);
    flight.flight_state = flight.flight_state === 'out' ? 'in' : 'out';
    console.log(flight.flight_state);
  }
  // getRocketById(id: any){
  //   this.spaceService.getRocketById(id)
  //   .subscribe(data => {
  //     console.log(data);
  //   });
  // }
}
