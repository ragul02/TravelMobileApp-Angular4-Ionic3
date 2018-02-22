import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewtripPage } from './newtrip';
import {  FlightPage} from '../flight/flight'
@NgModule({
  declarations: [
    NewtripPage,
    FlightPage
  ],
  imports: [
    IonicPageModule.forChild(NewtripPage),
  ],
})
export class NewtripPageModule {}
