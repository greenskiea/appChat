import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionSnapshots,
  getDocs,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Chat } from '../models/chat.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: Chat[] = [];
  Firestore: Firestore = inject(Firestore);
  itemCollection = collection(this.Firestore, 'chats');

  constructor(private fireStore: Firestore) {
    this.getData();
  }

  getData() {
    collectionSnapshots(this.itemCollection).subscribe((snapshot) => {
      let result = snapshot.map((doc) => doc.data());
      this.message = result as Chat[];
    });
  }

  async getMess() {
    const itemCollection = collection(this.Firestore, 'chats');
    let ItemShnapshot = await getDocs(itemCollection);
    let tempMess: Chat[] = [];

    ItemShnapshot.forEach((itemQuerySnapshot) => {
      const item = itemQuerySnapshot.data() as Chat;
      tempMess.push(item);
    });

    this.message = tempMess;

    return this.message;
  }

  async addMess(mess: Chat): Promise<string> {
    let StatusMessage = '';
    const itemCollection = collection(this.Firestore, 'chats');
    await addDoc(itemCollection, mess)
      .then((docRef) => {
        StatusMessage = 'success';
      })
      .catch((error) => {
        StatusMessage = 'error' + error.message;
      });
    return StatusMessage;
  }
}
