import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventData } from '../../models/event-data.model';

@Component({
  selector: 'app-event-showcase',
  templateUrl: './event-showcase.component.html',
  styleUrls: ['./event-showcase.component.css']
})
export class EventShowcaseComponent implements OnInit {

  public events: EventData[] = [];
  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getEvent();
  }

  getEvent = () => {
    this.eventService.getEvent().subscribe(data => {
      this.events = data.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as EventData;
      });
      console.log(this.events);
    });
  }

}
