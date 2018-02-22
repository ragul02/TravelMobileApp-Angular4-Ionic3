import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoPage } from './info';
import { ModalPage} from '../modal/modal'
@NgModule({
  declarations: [
    InfoPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoPage),
  ],
  entryComponents: [   
    ModalPage
  ],
})
export class InfoPageModule {}
