import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import  { MyTravelPage } from '../my-travel/my-travel';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  
    console.log('ionViewDidLoad ModalPage');
  }
closeModal() {
    this.viewCtrl.dismiss();
  }
  back(){
this.navCtrl.push(MyTravelPage);
  }
}
