import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {DetailPage} from "../detail/detail";
import {CreateItemPage} from "../create-item/create-item";

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public dataService:DataProvider) {

  }

    goToList():void {
      this.navCtrl.push('DetailPage');
    }

    goToCreate() {
      this.navCtrl.push('CreateItemPage');
    }

}
