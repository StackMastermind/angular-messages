import { Injectable } from '@angular/core';

import {
  CollectionReference,
  DocumentData,
  collection,
  addDoc
} from '@firebase/firestore';

import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesFirestoreService {

  private messagesCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.messagesCollection = collection(this.firestore, 'messages');
  }
}
