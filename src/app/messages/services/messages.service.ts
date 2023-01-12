import {
  CollectionReference,
  DocumentData,
  collection,
  addDoc,
} from '@firebase/firestore';

import { Firestore, collectionData } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MessageInterface } from '../types/message.interface';

@Injectable()
export class MessagesService {
  private messagesCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.messagesCollection = collection(this.firestore, 'messages');
  }

  getMessages() {
    return collectionData(this.messagesCollection, {
      idField: 'id',
    }) as Observable<MessageInterface[]>;
  }

  addMessage(message: MessageInterface) {
    return addDoc(this.messagesCollection, message);
  }
}
