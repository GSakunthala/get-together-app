import { Component, Input, OnInit } from '@angular/core';
import { EventData } from '../models/event-data.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(private eventService: EventService) { }


  @Input()
  private event: EventData;

  private weather: string;

  ngOnInit() {
    this.event = this.eventService.selectedEvent;
    this.eventService.getCoordinatesFromAddress('Athlone, Ireland')
      .subscribe(data => {
        console.log(data);
        this.weather = data.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
      });
  }

}
