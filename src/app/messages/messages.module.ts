import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './components/messages.component';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { MessageListComponent } from './components/message-list/message-list.component';

@NgModule({
  declarations: [MessagesComponent, DialogComponent, MessageListComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
  ],
})
export class MessagesModule {}
