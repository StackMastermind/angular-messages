import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageInterface } from '../types/message.interface';
import { DialogComponent } from './dialog/dialog.component';

import { Timestamp } from '@angular/fire/firestore';
import { MessagesService } from '../services/messages.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  constructor(
    private dialog: MatDialog,
    private messageService: MessagesService,
    private snackBar: MatSnackBar
  ) {}

  message : MessageInterface = {
    name: "",
    message: "",
    date: Timestamp.now()
  };

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 3000 });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.message.message = result.message;
        this.message.name = result.name;
        this.message.date = Timestamp.now()

        const addMessage = this.message;
        this.messageService
          .addMessage(addMessage)
          .then((response) => {
            console.log(response);
            this.openSnackBar('Message submitted successfully!', 'dismiss');
          })
          .catch((err) => {
            console.log(err);
            this.openSnackBar('Message submission failed', 'dismiss');
          });
      }
    });
  }
}
