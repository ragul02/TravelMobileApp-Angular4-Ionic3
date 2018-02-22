import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTravelPage } from './my-travel';

@NgModule({
  declarations: [
    MyTravelPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTravelPage),
  ],
})
export class MyTravelPageModule {}
