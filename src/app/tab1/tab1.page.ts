import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { email: string; }
export interface Task {
                        details: string;
                        name: string;
                        due: string;
                      }

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private userDoc: AngularFirestoreDocument<Item>;
  private tasks: AngularFirestoreDocument<Item>;

  item: Observable<Item>;

    constructor(public modalController: ModalController, public afAuth: AngularFireAuth, public afs: AngularFirestore) {
      this.afAuth.user.subscribe(user => {
        console.log(user)
        this.userDoc = afs.doc<Item>("users/"+user.uid);
        this.item = this.userDoc.valueChanges();
        this.tasks = this.userDoc.collection<Task>('tasks').valueChanges();
        console.log(this.tasks);
      });
    }

    async presentModal() {
      const modal = await this.modalController.create({
        component: ModalPage,
      });
      return await modal.present();
    }

    addTask() {
        console.log('hello world');
    }
    login() {
      this.afAuth.auth.signInWithEmailAndPassword("robert@tech-jocks.com", "F!5eagle").catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
      console.log(this.afAuth.user);
    }
    logout() {
      this.afAuth.auth.signOut();
    }
}
