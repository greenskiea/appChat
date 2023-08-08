import { Component } from '@angular/core';
import { ListFriend } from './models/listfriend.model';
import { ListfriendService } from './services/listfriend.service';
import { MessageService } from './services/message.service';
import { Chat } from './models/chat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chatWeb';
  listFriend: ListFriend[] = [];
  message: Chat[] = [];

  constructor(
    public LisfriendService: ListfriendService,
    public messageService: MessageService
  ) {
    this.getItem();
    this.getMess();
  }
  async getItem() {
    await this.LisfriendService.getItems().then((friend) => {
      this.listFriend = friend;
      console.log(this.listFriend);
    });
  }

  getMess() {
    this.messageService.getMess().then((mess) => {
      this.message = mess.sort((a, b) => {
        return a.createAt - b.createAt;
      });
      console.log(mess);
    });
  }

  handelAddMess(message: Chat) {
    this.messageService.addMess(message).then((StatusMessage) => {
      this.message.push(message);
      console.log(StatusMessage);
    });
  }

  async handleUpdateItem(listFriend: ListFriend) {
    await this.LisfriendService.updateMess(
      listFriend.id,
      listFriend.content
    ).then((StatusMessage) => {
      console.log(StatusMessage);
      this.getItem();
    });
  }
}
