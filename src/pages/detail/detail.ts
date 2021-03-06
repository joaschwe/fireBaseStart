import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  speakers: any;

  constructor(public navCtrl: NavController, public dataService:DataProvider) {

  }

  ionViewDidLoad() {
      this.speakers = this.dataService.speakerList;
  }

  itemClicked(item):void{
    this.navCtrl.push('ListDetailPage', item);
  }

}
