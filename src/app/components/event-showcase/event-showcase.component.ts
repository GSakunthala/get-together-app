import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventData } from '../../models/event-data.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-event-showcase',
  templateUrl: './event-showcase.component.html',
  styleUrls: ['./event-showcase.component.css']
})
export class EventShowcaseComponent implements OnInit {

  public events: EventData[] = [];
  constructor(private eventService: EventService, private store: AngularFirestore) {
    const things = store.collection('event').valueChanges();
    things.subscribe(console.log);
  }

  ngOnInit() {
    this.eventService.getJSON().subscribe(data => {
      this.events = data.events;
      console.log(this.events);
    });
  }

}
