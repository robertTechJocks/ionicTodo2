import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ModalPage } from '../modal/modal.page';
import { DateFiler } from './tasks.pipe';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, ModalPage, DateFiler],
  entryComponents: [
    ModalPage
  ]
})
export class Tab1PageModule {
}
