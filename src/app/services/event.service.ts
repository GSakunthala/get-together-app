import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient,
              private firestore: AngularFirestore) {
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
}
