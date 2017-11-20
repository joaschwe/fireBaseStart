import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  speakerListRef: AngularFirestoreCollection<any>;
  speakerList: Observable[any];
  lists: any;

  constructor(private afs:AngularFirestore) {

    this.speakerListRef = this.afs.collection('speakers');
    this.speakerList = this.speakerListRef.valueChanges();

  }

}
