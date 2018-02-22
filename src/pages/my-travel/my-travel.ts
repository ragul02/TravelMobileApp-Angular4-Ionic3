import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController,Item, ItemSliding } from 'ionic-angular';
import { ModalPage} from '../modal/modal';
import { NewtripPage } from '../newtrip/newtrip'
import {InfoPage } from '../info/info'
/**
 * Generated class for the MyTravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-travel',
  templateUrl: 'my-travel.html',
})

export class MyTravelPage {


showHide: boolean;
activeItemSliding: ItemSliding = null;
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
this.showHide = true; 
 }
Date="Wednesday, 8 Nov 2017";
dep_details={
city:'Bangalore',
time:'5.50AM',
code:'BLR'
}
arrival_details={
  city:'Mumbai',
time:'7.30AM',
code:'BOM'
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTravelPage');
  }
onclick(){
  this.navCtrl.push(ModalPage);
  
  console.log('icon clicked');
}

arrow_click(){
  
}


newtrip(){
  this.navCtrl.push(NewtripPage);
}

openOption(itemSlide: ItemSliding, item: Item) {
   console.log('opening item slide..');
   
   if(this.activeItemSliding!==null) //use this if only one active sliding item allowed
    this.closeOption();

   this.activeItemSliding = itemSlide;

   let swipeAmount = 194; //set your required swipe amount
   itemSlide.startSliding(swipeAmount);
   itemSlide.moveSliding(swipeAmount);

   itemSlide.setElementClass('active-options-right', true);
   itemSlide.setElementClass('active-swipe-right', true);

   item.setElementStyle('transition', null);
   item.setElementStyle('transform', 'translate3d(-'+swipeAmount+'px, 0px, 0px)');
  }

  closeOption() {
   console.log('closing item slide..');

   if(this.activeItemSliding) {
    this.activeItemSliding.close();
    this.activeItemSliding = null;
   }
}

  back() {
    this.navCtrl.push(InfoPage);
  }

}
