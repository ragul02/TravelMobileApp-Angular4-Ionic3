import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  FlightPage} from '../flight/flight'

/**
 * Generated class for the NewtripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newtrip',
  templateUrl: 'newtrip.html',
})
export class NewtripPage {

  tab1Root = FlightPage;
  tab2Root = FlightPage;
  tab3Root = FlightPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewtripPage');
  }

  book_flight(){
    console.log('inside book_flight');
    this.navCtrl.push(FlightPage);
  }

}
