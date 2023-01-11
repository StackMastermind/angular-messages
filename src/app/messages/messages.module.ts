import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';

//material imports
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule, MessagesRoutingModule, MatButtonModule],
})
export class MessagesModule {}
