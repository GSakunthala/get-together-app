import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {

  @Input()
  data: any;

  constructor() { }

  ngOnInit() {
  }

}
