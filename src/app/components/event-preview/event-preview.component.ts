import { Component, Input, OnInit } from '@angular/core';
import { EventData } from '../../models/event-data.model';
import { Router } from '@angular/router';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {

  @Input()
  data: EventData;
  img: string;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.getImage();
  }

  getImage() {
    // return "assets/img/background/1.jpg";
    const random = Math.ceil(Math.random() * 10);
    this.img =  this.data.image ? this.data.image : `assets/img/background/${random}.jpg`;
  }

  navigateToEventDetail() {
    this.eventService.setSelectedEvent(this.data);
    this.router.navigate(['/detail']);
  }

}
