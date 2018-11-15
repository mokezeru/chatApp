import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationViewComponent } from './registration-view/registration-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from '../services/services.module';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ConversationComponent } from './conversation/conversation.component';

@NgModule({
  declarations: [RegistrationViewComponent, ChatViewComponent, ConversationComponent],
  exports: [RegistrationViewComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ServicesModule
  ]
})
export class ChatModule { }
