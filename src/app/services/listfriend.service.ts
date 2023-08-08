import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionSnapshots,
  getDocs,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { ListFriend } from '../models/listfriend.model';

@Injectable({
  providedIn: 'root',
})
export class ListfriendService {
  listFriend: ListFriend[] = [];
  Firestore: Firestore = inject(Firestore);
  itemCollection = collection(this.Firestore, 'ListChat');

  constructor(private fireStore: Firestore) {
    this.getData();
  }

  getData() {
    collectionSnapshots(this.itemCollection).subscribe((snapshot) => {
      let result = snapshot.map((doc) => doc.data());
      this.listFriend = result as ListFriend[];
    });
  }

  async getItems() {
    const itemCollection = collection(this.Firestore, 'items');
    let ItemShnapshot = await getDocs(itemCollection);
    let tempFriend: ListFriend[] = [];

    ItemShnapshot.forEach((itemQuerySnapshot) => {
      const item = itemQuerySnapshot.data() as ListFriend;
      tempFriend.push(item);
    });

    this.listFriend = tempFriend;
    return this.listFriend;
  }

  async updateMess(id: string, content: string) {
    let qr = query(this.itemCollection, where('id', '==', id));
    let result = await getDocs(qr);
    console.log(result.docs[0].ref);
    await updateDoc(result.docs[0].ref, {
      content: content,
    })
      .then(() => {
        console.log(`update success ${{ content }}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
