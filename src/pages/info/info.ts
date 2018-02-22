import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTravelPage } from '../my-travel/my-travel'

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushPage = MyTravelPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

skip(){
  this.navCtrl.push(MyTravelPage);
}

}
