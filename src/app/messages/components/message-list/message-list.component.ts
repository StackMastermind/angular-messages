import { Component, OnInit, ViewChild } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { MessageInterface } from '../../types/message.interface';

import {MatSort, Sort} from '@angular/material/sort';

import * as MessageActions from '../../store/actions';

import {
  errorSelector,
  isLoadingSelector,
  messagesSelector,
} from '../../store/selectors';
import { MatTableDataSource } from '@angular/material/table';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit{

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  messages$: Observable<MessageInterface[]>;

  dataSource: any;
  displayedColumns: Array<string> = ['id', 'name', 'message', 'date'];

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.messages$ = this.store.pipe(select(messagesSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(MessageActions.getMessages());
    this.dataSource = this.messages$.subscribe((messages) => this.initializeDataSource(messages))
  }

  private initializeDataSource(messages: MessageInterface[]) {
    console.log(messages);
    this.dataSource = new MatTableDataSource(
      messages.length ? messages : []
    );
  }

  formatDate(timeStamp: Timestamp) {
    return timeStamp.toDate();
  }


}
