import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Chat } from 'src/app/models/chat.model';
import { ListFriend } from 'src/app/models/listfriend.model';
import { ListfriendService } from 'src/app/services/listfriend.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  @Input() message: Chat[] = [];
  @Input() item: ListFriend[] = [];

  @Output() onAddMess = new EventEmitter<Chat>();
  @Output() onUpdateItem = new EventEmitter();
  content: FormControl = new FormControl('');

  idsender: string = '456789';
  idreceiver: string = '456123';
  constructor(
    public messageService: MessageService,
    public LisfriendService: ListfriendService
  ) {
    console.log(this.message);
  }

  send() {
    let message: Chat = {
      id: Date.now().toString(),
      senderid: this.idsender,
      receiverid: this.idreceiver,
      content: this.content.value,
      createAt: Date.now(),
    };
    this.onAddMess.emit(message);
    console.log(this.content.value);
  }
  updateItem() {
    let itemUpdate: ListFriend = {
      id: this.idreceiver,
      name: '',
      image: '',
      content: this.content.value,
      time: '',
    };
    console.log(itemUpdate);
    this.onUpdateItem.emit(itemUpdate);
  }

  sendUpdate() {
    this.updateItem();
    this.send();
  }
}
