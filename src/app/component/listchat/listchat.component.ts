import { Component, Input } from '@angular/core';
import { ListFriend } from 'src/app/models/listfriend.model';
import { ListfriendService } from 'src/app/services/listfriend.service';

@Component({
  selector: 'app-listchat',
  templateUrl: './listchat.component.html',
  styleUrls: ['./listchat.component.scss'],
})
export class ListchatComponent {
  @Input() friend!: ListFriend;
  @Input() listFriend: ListFriend[] = [];

  constructor(public listFriendSerVice: ListfriendService) {}
}
