import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
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
  private tasksCollection: AngularFirestoreCollection<Task>;

  item: Observable<Item>;
  tasks: Observable<Task[]>;
  loginCreds = {
    email: '',
    password: '',
  }

    constructor(public modalController: ModalController, public afAuth: AngularFireAuth, public afs: AngularFirestore) {
      this.afAuth.user.subscribe(user => {
        this.userDoc = afs.doc<Item>("users/"+user.uid);
        this.item = this.userDoc.valueChanges();
        this.tasksCollection = this.userDoc.collection<Task>('tasks');
        this.tasks = this.tasksCollection.valueChanges()
      });
    }

    async presentModal() {
      const modal = await this.modalController.create({
        component: ModalPage,
        componentProps: { tasks: this.tasksCollection }
      });
      return await modal.present();
    }

    login() {
      console.log(this.loginCreds);
      if(this.loginCreds.email && this.loginCreds.password)
      {
        this.afAuth.auth.signInWithEmailAndPassword(this.loginCreds.email, this.loginCreds.password).catch(function(error){
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
    }
    logout() {
      this.afAuth.auth.signOut();
    }
}
