import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      title: '',
      organizer: '',
      summary: '',
      location: '',
      date: 's'
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Title', form.value);
  }

}
