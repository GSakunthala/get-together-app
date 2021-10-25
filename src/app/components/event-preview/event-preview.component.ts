import { Component, Input, OnInit } from '@angular/core';
import { EventData } from '../../models/event-data.model';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {

  @Input()
  data: EventData;

  constructor() { }

  ngOnInit() {
  }

}
