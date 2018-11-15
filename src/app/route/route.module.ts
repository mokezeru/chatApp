import { NgModule } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import {Routes, RouterModule} from '@angular/router';
import { RegistrationViewComponent } from '../chat/registration-view/registration-view.component';
import { CommonModule } from '@angular/common';
import { ChatViewComponent } from '../chat/chat-view/chat-view.component';

const routes: Routes =[
  { path: 'register', component:RegistrationViewComponent},
  { path: 'chat', component:ChatViewComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule],
})
export class RouteModule { }
