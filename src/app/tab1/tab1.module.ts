import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, ModalPage],
  entryComponents: [
    ModalPage
  ]
})
export class Tab1PageModule {
}
