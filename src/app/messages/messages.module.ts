import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//material imports
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './components/messages.component';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessagesService } from './services/messages.service';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';

import { MessagesEffects } from './store/effects';

@NgModule({
  declarations: [MessagesComponent, DialogComponent, MessageListComponent],
  providers: [MessagesService],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature('messages', reducers),
    EffectsModule.forFeature([MessagesEffects]),
  ],
})
export class MessagesModule {}
