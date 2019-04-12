import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';


export interface Task {
  details: string;
  name: string;
  due: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
    @Input() tasks: AngularFirestoreCollection<Task>;
    @Input() val: string;
    todo = {
        name: '',
        details: '',
        due: ''
    };

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
  }

  addTask() {
      this.tasks.add(this.todo);
      this.modalController.dismiss();
    }

}
