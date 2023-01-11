import { Component } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent {
  dataSource: Array<{ id: string; name: string; message: string }> = [
    { id: '234', name: 'dani', message: 'hello world' },
    { id: '234', name: 'dani', message: 'hello world' },
    { id: '234', name: 'dani', message: 'hello world' },
    { id: '234', name: 'dani', message: 'hello world' },
    { id: '234', name: 'dani', message: 'hello world' },
  ];
  displayedColumns: Array<string> = ['id', 'name', 'message'];
}
