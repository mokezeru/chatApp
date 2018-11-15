import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../models/chat.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  @Input() messages: Chat[];
  constructor() { }

  ngOnInit() {
  }

}
