import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { EventData } from '../models/event-data.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  public selectedEvent: EventData;

  constructor(private http: HttpClient,
              private firestore: AngularFirestore,
              private fireStorage: AngularFireStorage) {
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    // });
  }
  // public getJSON(): Observable<any> {
  //   return this.http.get('assets/data/event.json');
  // }
  getEvent() {
    return this.firestore.collection('event').snapshotChanges();
  }

  publishEvent(data) {
    // return new Promise<any>(function(resolve, reject) {
      return this.firestore.collection('event').add(data);
    //   .then(response => {console.log(response)}, error => reject(error));
    // });
  }
  uploadImage(file: File, filePath: string) {
      const task = this.fireStorage.upload(filePath, file);
      return {
        promise: task.snapshotChanges(),
        downloadRef: this.fireStorage.ref(filePath)
      };
      // .pipe(
      //   finalize(() => {
      //     const downloadURL = fileRef.getDownloadURL();
      //     downloadURL.subscribe(url => {
      //       console.log(url);
      //       return(url);
      //     });
      //   })
      // )
      // .subscribe(url => {
      //   if (url) {
      //     console.log(url);
      //   }
      // });
  }

  setSelectedEvent(event: EventData) {
    this.selectedEvent = event;
  }
}
