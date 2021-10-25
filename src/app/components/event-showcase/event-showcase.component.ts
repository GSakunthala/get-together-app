import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-showcase',
  templateUrl: './event-showcase.component.html',
  styleUrls: ['./event-showcase.component.css']
})
export class EventShowcaseComponent implements OnInit {

  public events = [];
  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.getJSON().subscribe(data => {
      this.events = data.events;
      console.log(this.events);
    });
  }

}
