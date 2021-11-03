import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { EventService } from '../../services/event.service';



@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})

export class EventCreateComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private eventService: EventService) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      title: '',
      organizer: '',
      summary: '',
      location: '',
      date: '',
      image:'',
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Title', form.value);
    this.eventService.publishEvent(form.value)
                      .then((data) => {
                        console.log(data);
                      })
    
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    var date = Date.now();
    const filePath = `EventImages/${date}`;
    // const fileRef = this.fireStorage.ref(filePath);
    const result = this.eventService.uploadImage(file, filePath);
    result.promise.pipe(
        finalize(() => {
          const downloadURL = result.downloadRef.getDownloadURL();
          downloadURL.subscribe(url => {
            console.log("Download url--");
            console.log(url);
            this.registrationForm.controls['image'].setValue(url);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
    }

}
