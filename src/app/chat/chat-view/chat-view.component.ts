import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';
import { Chat } from '../models/chat.model';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit, OnDestroy {

  chatMessages = [];
  chatSubscription: Subscription;

  registeredChatRoom: string;
  screeName: string;
  regSub: Subscription;

  chatMessage:Chat = {};

  constructor(private service: ChatService, private registrationService: RegisterService ) { }

  ngOnInit() {
    this.chatSubscription = this.service.chats$.subscribe(chats => {
      console.log('Chat Veiw Subscription',chats) ;
      this.chatMessages = chats;
    });

    this.regSub = this.registrationService.registration$.subscribe(reg => {
      console.log('Chat Veiw Reg Subscription',reg) ;
      this.registeredChatRoom = reg.selectedChatRoom;
    });
  }

  ngOnDestroy(){
    this.chatSubscription.unsubscribe();
  }
  refreshChats(){
    this.service.getChats(this.registeredChatRoom);
  }

  addMessage(){
    console.log("On addMessage", this.chatMessage);
    this.chatMessage = {...this.chatMessage,
    timestamp: new Date(),
    screenName: this.screeName,
    chatRoom: this.registeredChatRoom
    };
    this.service.addChat(this.chatMessage);
  }
}
