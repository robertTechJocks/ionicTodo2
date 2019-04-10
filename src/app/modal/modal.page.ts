import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
    todo = {
        taskName: '',
        taskDetails: '',
        dueDate: ''
    };

  constructor() {
  }

  ngOnInit() {
      console.log('hello world');
  }

  addTask() {
    console.log(this.todo);
    }

}
