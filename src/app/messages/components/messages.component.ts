import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageInterface } from '../types/message.interface';
import { DialogComponent } from './dialog/dialog.component';

import { Store } from '@ngrx/store';
import * as MessageActions from '../store/actions';
import { AppStateInterface } from 'src/app/types/appState.interface';

import { MessagesService } from '../services/messages.service'; 
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  constructor(
    private dialog: MatDialog, 
    private store: Store<AppStateInterface>,
    private messageService: MessagesService
    ) {}

  message : MessageInterface = {
    name: "",
    message: "",
    date: Timestamp.now()
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.message.message = result.message;
        this.message.name = result.name;
        this.message.date = Timestamp.now()

        const addMessage = this.message;

        this.messageService.addMessage(addMessage)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          })
        
      }
    });
  }
}
