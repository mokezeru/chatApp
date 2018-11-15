import { Injectable } from '@angular/core';
import { Chat } from '../chat/models/chat.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly getChatMessageApiUri = environment.getChatMessageApiUri;
  readonly setChatMessageApiUri = environment.setChatMessageApiUri;

  private chats: BehaviorSubject<Chat[]>;
  public chats$: Observable<Chat[]>;

  constructor(private http:HttpClient) { 
    this.chats = new BehaviorSubject<Chat[]>([]);
    this.chats$ = this.chats.asObservable();
  }
  public getChats(chatRoom:string): void{
    this.http.get<Chat[]>(`${this.getChatMessageApiUri}?room=${chatRoom}`)
    .toPromise().then(chats=>{
      console.log('Success getting chats', chats);
      this.chats.next(chats);
    }).catch(reason => {
      console.error('Error getting chats', reason);
    });
  }
  public addChat(chatMessage:Chat): void {
    this.http.post(this.setChatMessageApiUri, chatMessage)
    .toPromise().then(a => {
      console.log('Add Chat Service', a);
      this.getChats(chatMessage.chatRoom);
    }).catch(reason => {
      console.error('Error setting chats', reason);
    });
  }
}
