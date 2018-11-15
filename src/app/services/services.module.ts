import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from './register.service';
import { ChatService } from './chat.service';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [],
  providers: [RegisterService,ChatService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServicesModule { }
