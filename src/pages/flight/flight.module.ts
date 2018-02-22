import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightPage } from './flight';

@NgModule({
  declarations: [
    FlightPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightPage),
  ],
})
export class FlightPageModule { }
