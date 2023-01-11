import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageInterface } from '../types/message.interface';
import { DialogComponent } from './dialog/dialog.component';

import { Store } from '@ngrx/store';
import * as MessageActions from '../store/actions';
import { AppStateInterface } from 'src/app/types/appState.interface';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  constructor(private dialog: MatDialog, private store: Store<AppStateInterface>) {}

  message : MessageInterface = {
    name: "",
    message: ""
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.message.message = result.message;
        this.message.name = result.name;

        const addMessage = this.message;

        this.store.dispatch(MessageActions.addMessage({ addMessage }));
      }
    });
  }
}
